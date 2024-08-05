import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { config } from "../config/config"
import prisma from "../prisma/client"

// Define the User type
type User = {
    id: string;
    email: string;
    // Add other properties as needed
};

export const options = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "*******" }
            },
            async authorize(credentials) {
                const res = await fetch("YOUR_API_ENDPOINT", {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: { "Content-Type": "application/json" }
                })

                const user: User | null = res.ok ? await res.json() as User : null;
                if (user) {
                    return user
                }

                return null
            }
        })
    ]
} satisfies AuthOptions