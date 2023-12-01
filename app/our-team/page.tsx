'use client'

import { useEffect, useState } from "react"
import { base64ToFile } from "../lib/utils"
import axios from "axios"
import { Button } from "@nextui-org/react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface ITeam {
    id: string,
    name: string,
    position: string,
    instagram: string,
    description: string,
    avatar: any
}

const Team = () => {

    const [team, setTeam] = useState<ITeam[]>([])
    useEffect(() => {
        const getTeam = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/get-team`)
            const data = response.data.map((person: any) => ({
                ...person,
                avatar: base64ToFile(person.avatar, person.name)
            }))
            setTeam(data)
        }
        getTeam()
    }, [])
    return (
        <div className="flex flex-wrap justify-center items-center">
            {
                team.map((person: ITeam) => (
                    <Card className="w-[250px] h-[490px] flex flex-col justify-between items-center p-5 m-5">
                        <div className="flex flex-col justify-center items-center">
                            <img src={URL.createObjectURL(person.avatar)} className="w-[200px] h-[200px] object-cover rounded-md" />
                            <CardContent className="w-full flex flex-col justify-around">
                                <h3 className="mb-3">{person.name}</h3>
                                <p>{person.position}</p>
                            </CardContent>
                        </div>
                        <CardFooter>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button>Open Card</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>{person.name}</DialogTitle>
                                        <DialogDescription>
                                            {person.position}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        {person.description}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}

export default Team