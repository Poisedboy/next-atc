"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { ReloadIcon } from "@radix-ui/react-icons"
import axios from "axios"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [form, setForm] = React.useState({
        username: '',
        password: ''
    })

    const router = useRouter()

    async function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)
        // const signInData = await signIn('credentials', { redirect: false, username: form.username, password: form.password })
        const signInData = await axios.post()
        if (signInData?.error) {
            toast.error("Invalid data!")
        } else {
            toast.success('Welcome!')
            router.push('/admin')
        }
        setIsLoading(false)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Username
                        </Label>
                        <Input
                            id="username"
                            placeholder="Enter username"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            required
                            disabled={isLoading}
                            onChange={(e) => setForm(prevState => {
                                return { ...prevState, username: e.target.value }
                            })}
                        />
                        <Input
                            id="password"
                            placeholder="Enter password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            required
                            disabled={isLoading}
                            onChange={(e) => setForm(prevState => {
                                return { ...prevState, password: e.target.value }
                            })}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UserAuthForm
