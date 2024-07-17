import { NextRequest, NextResponse } from "next/server";

// this will run for every call
// export function middleware(req: NextRequest) {
//   console.log("middleware");
//   return NextResponse.next();
// }

// export function middleware(req: NextRequest) {
//   console.log("middleware");
//   return NextResponse.next();
// }

// // this will make middleware run for selected match
// export const config = {
//   matcher: "/api/:path*",
// };

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/user")) {
    return NextResponse.redirect(new URL("/about", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
}
