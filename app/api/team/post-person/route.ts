import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const body = await req.json()
        //@ts-ignore
        const createdPerson = await prisma.tEAMMATE.create({
            data: body
        })
        return NextResponse.json(createdPerson)
    } catch (e: any) {
        console.log("POST -> ", e)
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
    }
}