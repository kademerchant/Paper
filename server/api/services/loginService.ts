import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { config } from "../../config/config";
import prisma from "../../prisma/client";


type User = {
  id: string;
  email: string; 
};

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "text", placeholder: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("api/v1/auth/login", {
          method: "POST",
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const user: User | null = res.ok ? ((await res.json()) as User) : null;
        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  secret: config.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
    maxAge: 60 * 60 * 30 * 24,
  },
  pages: {
    signIn: "profile/login",
  },
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
  events: {
    async signIn({ user }) {
        console.log("User is signed in: ", user)
    }
  }
} satisfies AuthOptions;
