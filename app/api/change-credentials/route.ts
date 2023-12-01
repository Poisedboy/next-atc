import { prisma } from "@/app/lib/prisma"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"

export const PATCH = async (req: Request) => {
    const body = await req.json()
    const { username, password, oldUsername } = body
    try {
        const existingUserByUsername = await prisma.uSER.findUnique({
            where: {
                username: oldUsername
            }
        })
        if (!existingUserByUsername) {
            return null
        }

        const hashPassword = await hash(password, 10)

        const updatedUser = await prisma.uSER.update({
            where: {
                username: oldUsername
            },
            data: {
                username: username,
                password: hashPassword
            }
        })

        return NextResponse.json(updatedUser)
    } catch (e: any) {
        console.log("PATCH -> ", e)
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
    }
} 
