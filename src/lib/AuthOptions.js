import { jwtHelpers } from "@/helpers/jwtHelpers";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "pure-ledge",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(
            "https://pure-ledger.vercel.app/api/v1/user/login",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          const { data } = await res.json();

          const verifiedToken = jwtHelpers.verifyToken(
            data?.accessToken,
            process.env.JWT_SECRET
          );
          console.log("authOptionsss", data);

          if (res?.success && data) {
            return {
              ...data,
              ...verifiedToken,
            };
          }
        } catch (err) {
          console.log("eeeee", err);
          throw new Error(err.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(token, "auth....");
      // console.log(user, "user....");
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }) {
      // console.log(token, "tttttt....");
      // console.log(session, "ssss....");
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/register", error: "/" },
};
