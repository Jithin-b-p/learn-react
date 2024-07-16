import { NextRequest, NextResponse } from "next/server";

// this will run for every call
export function middleware(req: NextRequest) {
  console.log("middleware");
  return NextResponse.next();
}
