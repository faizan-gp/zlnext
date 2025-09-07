let count = 0;

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ count });
}

export async function POST() {
  count += 1;
  return NextResponse.json({ count });
}

export async function DELETE() {
  count = 0;
  return NextResponse.json({ count });
}
