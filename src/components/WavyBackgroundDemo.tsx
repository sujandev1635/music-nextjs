"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import AnimatedTooltipPreview from '@/components/AnimatedTooltipPreview';

function WavyBackgroundDemo() {
    return (

        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Meet Our Instructors
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                Discover the talented professionals who make guide your journey to success.
            </p>
            <div className="mb-10 flex justify-center items-center w-full ">
                <AnimatedTooltipPreview />

            </div>
        </WavyBackground>

    )
}

export default WavyBackgroundDemo