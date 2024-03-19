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
        <div className="w-auto h-auto backdrop-blur-sm bg-black/30 px-2 py-11 fixed space-y-2 top-0 left-0 z-40">
            {menu.map(({ label, link }, index) => pathname !== link && (
                <Link
                    href={link}
                    className="flex  hover:text-white items-center gap-x-2 text-gray-300"
                >
                 <ArrowRight />  {label}
                </Link>
            ))}
        </div>
    );
};

export default Nav;
