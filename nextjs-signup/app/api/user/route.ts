import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.user.create({ data: body });
  return NextResponse.json({ comment: "success" }, { status: 200 });
}

export async function GET() {
  const user = await prisma.user.findFirst({});
  if (!user) {
    return NextResponse.json({ comment: "error" }, { status: 500 });
  }
  return NextResponse.json(user, { status: 200 });
}
