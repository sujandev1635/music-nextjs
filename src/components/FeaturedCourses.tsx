"use client";
import React from "react";


import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import courseData from "../data/music_course.json";
import Link from "next/link";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}
function FeaturedCourses() {
    const featureCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className='py-12 bg-gray-900 text-white'>
            <div>
                <div>
                    <div className="text-center">
                        <h1 className="text-base text-teal-600 text-semibold tracking-wide uppercase">Featured Courses</h1>
                        <p className="mt-3 text-4xl font-extrabold text-white leading-9 tracking-tight uppercase sm:text-4xl" >Lear with best course</p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center" >
                    {featureCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                {/* <Image
                                    src={`${course.image}`}
                                    alt="jordans"
                                    height="400"
                                    width="400"
                                    className="object-contain"
                                /> */}
                                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {course.title}
                                </p>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {course.description}
                                </p>

                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>Buy now </span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                        {course.price}
                                    </span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-yellow-500">
                                        {course.instructor}
                                    </span>

                                </button>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>

            </div>
            <div className="mt-20 text-center">
                <Link href={'/course'}
                    className="px-4 py-2 rounded border border-meutrual-600 text-meutrual-600 hover:bg-meutrual-600 hover:text-white transition-all duration-300"
                >View All Courses</Link>
            </div>
        </div>
    )
}

export default FeaturedCourses