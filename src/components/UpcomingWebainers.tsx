"use client";
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];

function UpcomingWebainers() {
    return (
        <div className='py-12 mx-auto bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto py-4 sm:px-6'>
                <div className='text-center'>
                    <h1 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webainers</h1>
                    <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight  text-center  ">Enhance Your Musical Journey</p>
                </div>
                <div className='mt-10'>
                    <HoverEffect items={projects.map(webinar => ({
                        title: webinar.title,
                        description: webinar.description,
                        link: webinar.link
                    }))} />
                </div>
                <div className='mt-10 text-center'>
                    <Link href={'/'}
                        className="px-4 py-2 rounded border border-meutrual-600 text-meutrual-600 hover:bg-meutrual-600 hover:text-white transition-all duration-300"
                    >View All Webinars</Link>
                </div>

            </div>
        </div>
    )
}



export default UpcomingWebainers