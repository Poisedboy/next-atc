import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        const team = await prisma.tEAMMATE.findMany()
        return NextResponse.json(team)
    } catch (e) {
        console.log("POST -> ", e)
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
    }
}