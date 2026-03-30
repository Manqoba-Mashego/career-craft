import crypto from "crypto"
import { addPaidReference } from "@/lib/paidReferences";

export async function POST(req){
    try {
        const body = await req.text();
        const signature = req.headers.get("x-paystack-signature");

        const hash = crypto.createHmac("sha512", process.env.PAYSTACK_SECRET_KEY).update(body).digest("hex");
        if (hash !== signature){
            return new Response("Invalid signature", {status: 401});
        }

        const event  = JSON.parse(body);
        console.log("Webhook event: ", event)

        if (event.event === "charge.success"){
            const data = event.data;
            const email = data.customer.email;
            const amount = data.amount;
            const reference = data.reference;
            addPaidReference(reference);
            console.log("Payment confirmed via webhook:", {
                email,
                amount,
                reference,
            });


        }
        return new Response("OK", {status: 200})

    } catch(err){
        console.log("Webhook error: ", err);
        return new Response("Webhook err", {status: 500})
    }
}