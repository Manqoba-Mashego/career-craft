import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "paidReferences.json");

export function getPaidReferences() {
    if (!fs.existsSync(filePath)) return new Set();
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return new Set(data);
}

export function addPaidReference(reference) {
    const references = getPaidReferences();
    references.add(reference);

    fs.writeFileSync(filePath, JSON.stringify([...references], null, 2));
}