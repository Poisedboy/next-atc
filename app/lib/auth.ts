import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: 'Creadentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'username' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null
                }

                const existingUser = await prisma.uSER.findUnique({
                    where: {
                        username: credentials?.username
                    }
                })

                if (!existingUser) {
                    return null
                }

                const passwordMatch = await compare(credentials.password, existingUser.password)
                if (!passwordMatch) {
                    return null
                }

                return {
                    id: `${existingUser.id}`,
                    name: existingUser.username,
                }
            }
        })
    ],
}