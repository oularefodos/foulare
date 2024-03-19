"use client";

import { motion } from "framer-motion";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

export function Presentation() {
    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
            <div className="text-3xl font-bold md:text-7xl  text-white text-center">
                I'am Fode oulare
            </div>
            <div className="font-extralight text-base md:text-4xl text-green-200 py-4">
                Software Engineer
            </div>
            <div className="font-extralight text-center text-base md:text-xl max-w-[500px] text-neutral-200 py-4">
                I am a passionate Full-Stack developer with a love for
                technology, continuous learning, and creating innovative
                solutions.
            </div>
            <div className="flex items-center gap-x-3">
                <Link
                    href="/projects"
                    className="bg-black hover:gap-3 flex items-center gap-x-2 border dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
                >
                    Projects <ArrowRight />
                </Link>
                <Link
                    href="/contact"
                    className="bg-black underline dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
                >
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white h-11 w-40 text-black font-bold"
                    >
                        Contact me
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
