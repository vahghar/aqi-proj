import {PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const prisma = new PrismaClient()

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "github_id",
            clientSecret: process.env.GITHUB_SECRET || "github_secret",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST}