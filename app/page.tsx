"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Presentation } from "@/components/ui/Presentation";

export default function BackgroundBoxesDemo() {
    return (
        <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="#000000"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <Presentation />
        </div>
    );
}
