'use client'

import { Accordion, AccordionItem } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Security from "../components/Security"
import CreatePerson from "../components/CreatePerson"
import CreateContacts from "../components/CreateContacts"

const Admin = () => {
    const [isMobile, setMobile] = useState(false)
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/')
        }
    }, [session])

    useEffect(() => {
        if (window.innerWidth < 767) {
            setMobile(true)
        }
    }, [])

    return (
        <div className="min-h-[100vh]">
            <h2 className="text-center uppercase">Admin Page</h2>
            {
                isMobile ? (
                    <Accordion selectionMode="multiple">
                        <AccordionItem key="1" aria-label="create-person" title="Add teammate">
                            <CreatePerson />
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="create-contacts" title="Edit Contacts">
                            <CreateContacts />
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="security" title="Security">
                            <Security />
                        </AccordionItem>
                    </Accordion>
                ) : (
                    <div>Descktop UI currently is unavailable </div>
                )
            }
        </div>
    )
}

export default Admin
