'use client'

import { Button, Input } from "@nextui-org/react"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from 'axios'
import { convertFile } from "../lib/utils"

interface Inputs {
    name: string,
    position: string,
    instagram: string,
    description: string,
    avatar: any,
}

const CreatePerson = () => {
    const [isLoading, setLoading] = useState(false)
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/')
        }
    }, [session])

    const [form, setForm] = useState<Inputs>({
        name: '',
        position: '',
        instagram: '',
        description: '',
        avatar: null
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/post-person`, form)
        console.log(response)
        if (response.status === 200) {
            toast.success('Operation successfuly done!')
        } else if (response.status === 500) {
            setLoading(false)
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

    const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        const selectedFile = e.target.files[0]

        if (selectedFile) {
            const maxSize = 1024 * 1024

            if (selectedFile.size > maxSize) {
                toast.error('The selected image is large. Please choose a smaller image.')
            } else {
                //@ts-ignore
                const convertedFile = await convertFile(e.target.files[0])
                console.log(e.target.files)
                setForm({
                    ...form,
                    avatar: convertedFile
                })
            }
        }
    }

    return (
        <div className="w-full h-full">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input className="mb-5" name='avatar' type="file" onChange={handleChangeImage} required />
                <Input variant="bordered" className="mb-5" name='name' type="text" label='Name' onChange={handleChange} isRequired />
                <Input variant="bordered" className="mb-5" name='position' type="text" label='Position' onChange={handleChange} isRequired />
                <Input variant="bordered" className="mb-5" name='instagram' type="text" label='Instagram' onChange={handleChange} />
                <Input variant="bordered" className="mb-5" name='description' type="text" label='Description' onChange={handleChange} />
                <Button type='submit' color="primary">
                    {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                    post
                </Button>
            </form>
        </div>
    )
}

export default CreatePerson
