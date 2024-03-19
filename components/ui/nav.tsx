"use client";
import { ArrowRight, Cross } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
    const pathname = usePathname();
    const menu = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Projects",
            link: "/projects",
        },
        {
            label: "Contact",
            link: "/contact",
        },
    ];
    return (
        <div className="flex items-center backdrop-blur-sm bg-black/30 justify-center gap-x-4 px-4 py-5 fixed top-0 left-0 right-0 z-40">
            {menu.map(({ label, link }, index) => pathname !== link && (
                <Link
                    href={link}
                    key={index}
                    className="flex  hover:text-white items-center gap-x-2 text-gray-300"
                >
                 {label}
                </Link>
            ))}
        </div>
    );
};

export default Nav;
