import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function POST(request: Request) {
  try {
    const { id, rating } = await request.json();
    const filePath = path.resolve(process.cwd(), "data/ventures.json");
    const ventures = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const index = ventures.findIndex((v: any) => v.id === id);
    if (index === -1)
      return NextResponse.json({ error: "Venture not found" }, { status: 404 });

    const venture = ventures[index];

    console.log(`Updating venture ${id} with new rating ${rating}`);
    if (typeof rating === "number" && rating >= 1 && rating <= 5) {
      const oldRating = venture.rating || 0;
      const oldReviews = venture.reviews || 0;
      const newRating =
        ((oldRating * oldReviews) + rating) / (oldReviews + 1);
      venture.rating = parseFloat(newRating.toFixed(1));
      venture.reviews = oldReviews + 1;
    } else {
      venture.reviews = (venture.reviews || 0) + 1;
    }

    fs.writeFileSync(filePath, JSON.stringify(ventures, null, 2));
    return NextResponse.json({ success: true, venture });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error updating reviews" },
      { status: 500 }
    );
  }
}
