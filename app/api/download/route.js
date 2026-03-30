import { getPaidReferences } from "@/lib/paidReferences";
import fs from "fs";
import path from "path";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get("reference");

    const paidReferences = getPaidReferences();

    if (!paidReferences.has(reference)) {
        return new Response("Unauthorized", { status: 401 });
    }

    const filePath = path.join(process.cwd(), "public", "templates", "cover-letter-template.docx");
    const file = fs.readFileSync(filePath);

    return new Response(file, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=cover-letter-template.docx",
        },
    });
}