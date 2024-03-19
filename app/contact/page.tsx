import { Button } from "@/components/ui/button";
import { GitBranch, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="h-auto w-auto flex flex-col space-y-5">
                <Link
                    href={"https://www.linkedin.com/in/fode-oulare-a967a21bb/"}
                >
                    <Button className="flex items-center gap-x-2">
                        {" "}
                        <Linkedin /> Linkedin
                    </Button>
                </Link>
                <Link href={"https://github.com/oularefodos?tab=repositories/"}>
                    <Button className="flex items-center gap-x-2">
                        <GitBranch /> Github
                    </Button>
                </Link>
                <Link href="mailto:oularefode54@gmail.com">
                    <Button className="flex items-center gap-x-2">
                        <MessageCircle /> Email
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default page;
