'use client'

import { useEffect, useState } from "react"
import Image from "next/image"

const Banner = () => {
    // const [page, setPage] = useState<number>(1)
    const [isMobile, setMobile] = useState<boolean>(false)

    useEffect(() => {
        // let int = setInterval(() => {
        //     setPage(prevState => ((prevState + 1) >= 3 ? 1 : prevState + 1))
        // }, 5000)

        if (window.innerWidth <= 500) {
            setMobile(true)
        }

        // return () => clearInterval(int)
    }, [])

    return (
        <div className={`relative flex ${isMobile ? 'h-[50vh]' : 'h-[calc(100vh-65px)]'} w-full flex-col justify-center items-center`}>
            <div className="w-full h-full bg-cover bg-center flex flex-col justify-end items-center" style={{ backgroundImage: `url('/image_1.jpg')` }}>
                <div
                    className="max-w-[350px] bg-opacity-50 bg-slate-600 p-5 m-5 rounded-lg"
                >
                    <img src={'/ats.png'} alt="logo" width={300} />
                    <p>ART SPACE AND CHARITY FOUNDATION</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
