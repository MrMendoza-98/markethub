import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    const filePath = path.resolve(process.cwd(), "data/ventures.json");
    const ventures = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const index = ventures.findIndex((v: any) => v.id === id);
    if (index === -1) return NextResponse.json({ error: "Venture not found" }, { status: 404 });
    ventures[index].reviews = (ventures[index].reviews || 0) + 1;
    fs.writeFileSync(filePath, JSON.stringify(ventures, null, 2));
    return NextResponse.json({ success: true, venture: ventures[index] });
  } catch (err) {
    return NextResponse.json({ error: "Error updating reviews" }, { status: 500 });
  }
}
