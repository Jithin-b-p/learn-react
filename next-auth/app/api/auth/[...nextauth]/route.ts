import { NEXT_AUTH_OPTION } from "@/app/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(NEXT_AUTH_OPTION);

export { handler as GET, handler as POST };
