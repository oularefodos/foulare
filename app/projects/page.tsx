"use client";

import { HoverEffect } from "@/components/card";
import { ArrowRight, Code, TestTube } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { schoolProjects } from "@/constant";
import { SparklesCore } from "@/components/ui/sparkles";



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
            className="h-auto min-h-full p-6 text-gray-300 max-w-[1200px] m-auto space-y-11 flex flex-col py-11"
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
                    <ArrowRight /> Currently working on <span className="font-bold ">BotifyHub</span>
                </div>
                <p className="m-5 text-gray-400">
                    Empowering users to craft intelligent chatbots effortlessly across messaging platforms & websites, breaking barriers with a seamless, no-code experience.
                </p>
                <div className="flex italic items-center gap-x-2">
                    <ArrowRight /> Some of my School
                </div>
                <HoverEffect items={schoolProjects} />
            </div>
            
        </motion.div>
    );
};

export default page;
