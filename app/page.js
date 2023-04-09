'use client'
import data from './json/data.json'
import { useState } from 'react'
import Image from 'next/image'
import jeremy from './images/image-jeremy.png'
import Card from './Card'

export default function HomePage () {
    const [view, setView] = useState("week");

    return (
        <main className='flex justify-center items-center bg-screenColor lg:py-0 py-4 h-12/12 lg:h-screen'>
            <section className='grid lg:grid-cols-4 lg:grid-rows-2 gap-8 text-white w-11/12 lg:w-fit'>
                <article className='row-span-2 relative'>
                    <section className='flex lg:flex-col bg-jeremyBg p-6 pb-16 rounded-xl w-full lg:w-64 mt-0 absolute'>
                        <div className='border-4 w-[90px] mb-12 rounded-[50%]'>
                            <Image src={jeremy} alt='jeremy' width={90} />
                        </div>
                        <div>
                            <p>Report for:</p>
                            <h1 className='text-5xl font-light'>Jeremy <br/> Robson</h1>
                        </div>
                    </section>
                    <section className='flex lg:justify-start justify-between lg:flex-col gap-4 bg-darkBlue p-6 pt-32 mt-32 lg:mt-64 lg:w-64 rounded-xl'>
                        <a href='#' onClick={() => setView("day")} className={view == "day" ? "text-white" : "text-desaturatedBlue"}>Daily</a>
                        <a href='#' onClick={() => setView("week")} className={view == "week" ? "text-white" : "text-desaturatedBlue"}>Weekly</a>
                        <a href='#' onClick={() => setView("month")} className={view == "month" ? "text-white" : "text-desaturatedBlue"}>Monthly</a>
                    </section>
                </article>
                {data.map((item, index) => {
                    return(
                        <Card key={index} view={view} item={item} index={index} />
                    )
                })}
            </section>
        </main>
    )
}