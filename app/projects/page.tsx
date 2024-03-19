import { HoverEffect } from "@/components/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

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
   
];

const page = () => {
    return (
        <div className="h-full p-6 text-gray-300 max-w-[1200px] m-auto space-y-11 flex flex-col py-11">
            <h1 className="md:text-4xl p-2 border-t border-b border-gray-700 text-center font-bold italic uppercase">
                Projects
            </h1>
            <div className="space-y-4">
                <div className="flex italic items-center gap-x-2">
                    <ArrowRight /> Project academic
                </div>
                <HoverEffect items={projects} />
            </div>
            <div className="space-y-4">
                <div className="flex italic items-center gap-x-2">
                    <ArrowRight /> Project academic
                </div>

                <HoverEffect items={projects} />
            </div>
            <div className="space-y-4">
                <div className="flex italic items-center gap-x-2">
                    <ArrowRight /> Side Project
                </div>

                <HoverEffect items={projects} />
            </div>
        </div>
    );
};

export default page;
