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
            className="relative flex flex-col gap-4 items-center justify-center px-4 z-10"
        >
            <div className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                FODE OULARE
            </div>

            <div className="font-extralight text-[17px] text-center text-base  max-w-[500px] text-neutral-200 py-4">
                Hello there! I'm a <span className="font-bold text-green-400">Software Engineer</span> with a knack for transforming concepts into captivating digital experiences through code. My expertise lies in crafting innovative solutions that resonate with audiences. Let's collaborate to bring your ideas to life
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
