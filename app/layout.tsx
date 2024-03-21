import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/nav";
import { Source_Code_Pro } from 'next/font/google'
import { cn } from "@/utils/cn";

const sourceCodePro = Source_Code_Pro({ subsets : ['latin']});

export const metadata: Metadata = {
  title: "Fode Oulare",
  description :" As a skilled freelancer and software engineer specializing in Next.js development, I bring expertise in building modern web applications with seamless user experiences. Leveraging my proficiency in languages such as JavaScript and TypeScript, I deliver innovative solutions for diverse projects. My commitment to Test-Driven Development and clean code ensures the reliability and efficiency of my work. Contact me for Next.js development services and web consulting tailored to your needs.\n freelancer, software engineer, web developer, Next.js developer, JavaScript, TypeScript, Next.js, React, Node.js, Test-Driven Development, clean code ."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-black", sourceCodePro.className)}>
        <main className="w-full h-full">
          <Nav />
          <div className="mt-11 h-full w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
