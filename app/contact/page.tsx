'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GitBranch, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

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
            className="flex h-full w-full items-center justify-center"
        >
            <div className="h-auto w-[200px] flex flex-col space-y-5">
                <Link
                    href={"https://www.linkedin.com/in/fode-oulare-a967a21bb/"}
                    className="w-full"
                >
                    <Button className="flex w-60  items-center gap-x-2">
                        {" "}
                        <Linkedin /> Linkedin
                    </Button>
                </Link>
                <Link href={"https://github.com/oularefodos?tab=repositories/"}>
                    <Button className="flex w-60  items-center gap-x-2">
                        <Github /> Github
                    </Button>
                </Link>
                <Link href="mailto:oularefode54@gmail.com">
                    <Button className="flex w-60  items-center gap-x-2">
                        <Mail /> Email
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default page;
