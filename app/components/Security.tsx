'use client'

import { Button, Input } from "@nextui-org/react"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from 'axios'

interface Inputs {
    username: string,
    password: string,
}

const Security = () => {
    const [isLoading, setLoading] = useState(false)
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/')
        }
    }, [session])

    const [form, setForm] = useState<Inputs>({
        username: '',
        password: '',
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/change-credentials`, { ...form, oldUsername: session?.user?.name })
        console.log(response)
        if (response.status === 200) {
            toast.success('Operation successfuly done!')
        } else {
            toast.error("Something went wrong!")
        }
        setLoading(false)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="w-full h-full">
            <h2 className="text-center">Change credentials</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <Input variant="bordered" className="mb-5" name='username' type="text" label='username' onChange={handleChange} />
                <Input variant="bordered" className="mb-5" name='password' type="text" label='password' onChange={handleChange} />
                <Button type='submit' color="primary">
                    {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                    change
                </Button>
            </form>
        </div>
    )
}

export default Security
