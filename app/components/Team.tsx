'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { base64ToFile } from "../lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ITeam {
    id: string,
    name: string,
    position: string,
    description: string,
    avatar: any
}

const TeamSection = () => {
    const [isLoading, setLoading] = useState(true)
    const [team, setTeam] = useState<ITeam[]>([])
    useEffect(() => {
        const getTeam = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/team/get-team`)
            const data = response.data.map((person: any) => ({
                ...person,
                avatar: base64ToFile(person.avatar, 'avatar')
            }))
            setTeam(data)
            setLoading(false)
        }
        getTeam()
    }, [])
    return (
        <>
            <div className="flex overflow-x-auto m-4 gap-2 lg:gap-11">
                {
                    isLoading ? (
                        <>
                            <div className="flex flex-col">
                                <Skeleton className="h-[140px] w-[150px] rounded-full mb-2" />
                                <Skeleton className="h-4" />
                            </div>
                        </>
                    ) :
                        (
                            <>
                                {team.map(person => (
                                    <div key={person.id} className="flex-none">
                                        <img src={URL.createObjectURL(person.avatar)} alt="teammate" className="h-[140px] w-[150px] object-cover rounded-full" />
                                        <h3 className="text-center">{person.name}</h3>
                                    </div>
                                ))}
                            </>
                        )}
            </div>
        </>
    )
}

export default TeamSection
