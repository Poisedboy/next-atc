import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import { hash } from 'bcrypt'

export const POST = async (req: Request) => {
    try {
        const body = await req.json()
        const { username, password } = body

        const existingUserByUsername = await prisma.uSER.findUnique({
            where: {
                username: username
            }
        })
        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: 'user already exists' }, { status: 403 })
        }

        const existingUserByPassword = await prisma.uSER.findUnique({
            where: {
                password: password
            }
        })
        if (existingUserByPassword) {
            return NextResponse.json({ user: null, message: 'user already exists' }, { status: 403 })
        }

        const hashPassword = await hash(password, 10)

        const newUser = await prisma.uSER.create({
            data: {
                username,
                password: hashPassword,
            }
        })

        return NextResponse.json({ user: newUser, mesaage: 'User created successfully' }, { status: 201 })
    } catch (e: any) {
        console.log("POST -> ", e)
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
    }
}