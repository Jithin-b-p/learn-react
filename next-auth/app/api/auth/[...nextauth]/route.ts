import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to be displayed on the sign in form(sign in with ...)
      name: "Email",
      //The credentials is used to generate a suitable form on the sign in page. (what are fields that are needed can be specified here)
      credentials: {
        email: { label: "email", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "passoword",
          placeholder: "Passsword",
        },
      },

      async authorize(credentials) {
        // here provide the authorization logic here (like check the db for user validation) if the user present return object else return null or false.
        return { id: 1, email: credentials?.email } as any;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "api/auth/signin",
  },

  callbacks: {
    async jwt({ token }) {
      token.userId = token.sub;
      return token;
    },

    async session({ session, token }: { session: any; token: JWT }) {
      session.user.id = token.userId;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
