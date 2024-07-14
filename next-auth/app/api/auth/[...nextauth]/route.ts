import { NEXT_AUTH_OPTION } from "@/app/lib/auth";
import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth(NEXT_AUTH_OPTION);

export { handler as GET, handler as POST };
