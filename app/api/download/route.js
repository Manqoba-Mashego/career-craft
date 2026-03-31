import fs from "fs";
import path from "path";
import { redis } from "@/lib/redis";
import { ratelimit } from "@/lib/rateLimit";
import crypto from "crypto"


export async function GET(req) {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const { success } = await ratelimit.limit(ip);
    if (!success) return new Response("Too many requests", { status: 429 });

    const { searchParams } = new URL(req.url);

    console.log("Incoming request: ", req.url);

    const token = searchParams.get("token");
    const reference = searchParams.get("reference") || searchParams.get("trxref");

    if (token){
        const data = await redis.get(`download:${token}`);
        if (!data) return new Response("Invalid or expired link", {status: 403});

        const downloads = (data.downloads || 0) + 1;

        if (downloads >= 3){
            await redis.del(`download:${token}`);
        } else {
            await redis.set(`download:${token}`, {
                ...data,
                downloads,
            }, {ex: 60 * 10})
        }

        const filePath = path.join(process.cwd(), "public", "templates", "cover-letter-template.docx");
        const file = fs.readFileSync(filePath);

        return new Response(file, {
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "Content-Disposition": "attachment; filename=cover-letter-template.docx",
            },
        });
    }

    if (reference){
        const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                },
            }
        );

        const verifyData = await verifyRes.json();
        if (!verifyData || !verifyData.data){
            return new Response("Verification failed", {status: 500})
        }
        const amount = verifyData.data.amount;

        if (amount !== 5000){
            return new Response("Invalid payment amount", {status: 400});
        }

        if (!verifyData.status || verifyData.data.status !== "success") {
            return new Response("Payment not verified", { status: 401 });
        }

        const newToken = crypto.randomBytes(32).toString("hex");

        await redis.set(`download:${newToken}`, 
            {
                email: verifyData.data.customer?.email || "unknown",
            },
            { ex: 60 * 10 } 
        );
        return new Response(null, {
            status: 302,
            headers: {
                Location: `/cover-letter/download?token=${newToken}`,
                "Cache-Control": "no-store",
            },
        });
    }

    return Response.json({error: "Missing token or reference"}, { status: 400 });
}

