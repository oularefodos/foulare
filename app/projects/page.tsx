"use client";

import { HoverEffect } from "@/components/card";
import { ArrowRight, Code, TestTube } from "lucide-react";
import { motion } from "framer-motion";
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
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="h-full p-6 text-gray-300 max-w-[1200px] m-auto space-y-11 flex flex-col py-11"
        >
            <h1 className="md:text-4xl p-2 border-t border-b border-gray-700 text-center font-bold italic uppercase">
                Skills
            </h1>
            <div className="flex flex-col space-y-11 md:space-y-4">
                <div className="flex italic flex-wrap items-center gap-x-2">
                    <ArrowRight /> Langagues :
                    <div>
                        C, C++, Python, Javascript, Typescript, ReactJs, NextJs,
                        NodeJs, NestJs
                    </div>
                </div>
                <div className="flex italic flex-wrap items-center gap-x-2">
                    <ArrowRight />
                    Testing :<div>Jest, Supertest</div>
                </div>
                <div className="flex italic flex-wrap items-center gap-x-2">
                    <ArrowRight /> Others :
                    <div>
                        Docker, Nginx, Test-Driven Development, Clean code
                    </div>
                </div>
            </div>
            <h1 className="md:text-4xl p-2 border-t border-b border-gray-700 text-center font-bold italic uppercase">
                Projects
            </h1>
            <div>
                <div className="flex italic items-center gap-x-2">
                    <ArrowRight /> Project academic
                </div>
                <HoverEffect items={projects} />
            </div>
            <div>
                <div className="flex italic items-center gap-x-2">
                    <ArrowRight /> Project academic
                </div>

                <HoverEffect items={projects} />
            </div>
            <div>
                <div className="flex italic items-center gap-x-2">
                    <ArrowRight /> Side Project
                </div>

                <HoverEffect items={projects} />
            </div>
        </motion.div>
    );
};

export default page;
