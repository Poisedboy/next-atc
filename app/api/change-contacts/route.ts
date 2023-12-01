import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import { hash } from 'bcrypt'

export const PATCH = async (req: Request) => {
    try {
        const body = await req.json()
        const { instagramLink, facebookLink, phoneNumber, email } = body

        const newUser = await prisma.cONTACTS.update({
            where: {
                id: '1'
            },
            data: {
                instagramLink,
                facebookLink,
                phoneNumber,
                email,
            }
        })

        return NextResponse.json({ user: newUser, mesaage: 'Contacts successfully updated' }, { status: 200 })
    } catch (e: any) {
        console.log("Contacts -> ", e)
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
    }
}