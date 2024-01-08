"use client"
import Link from 'next/link'
import Image from "next/image";
import { usePathname } from 'next/navigation'

import headerLogo from "@/public/svg/headerLogo.svg";

export default function Header() {

    const currentPath = usePathname();
    ;
    return (
        <header className="bg-white text-gray-800 shadow-md py-4 px-6">
            <div className="container mx-auto flex flex-col md:flex-col items-left justify-between">
                {/* Top Row */}
                <div className="flex items-center mb-4 md:mb-0 py-4 justify-between">
                    <Link href="/">
                        <Image src={headerLogo} alt="" />

                    </Link>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Bottom Row */}
                <nav className="flex flex-wrap space-x-4 py-4 ">
                    <Link href="/" >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20"
                                  fill={currentPath === "/" ? "#49C2F1" : "#0165AF"}
                            />
                            <path d="M17.3337 30.6667V22.6667H22.667V30.6667H29.3337V20H33.3337L20.0003
                                8L6.66699 20H10.667V30.6667H17.3337Z" fill="white"/>
                        </svg>
                    </Link>
                    <Link href={"/ships"} className={`cursor-pointer px-4 py-2 ${currentPath === "/ships" ? "bg-baltice-middle-blue" : "bg-baltice-blue"} text-white`}>
                        Ships & Restrictions
                    </Link>
                    <Link href={"/traffic"} className={`cursor-pointer px-4 py-2 ${currentPath === "/traffic" ? "bg-baltice-middle-blue" : "bg-baltice-blue"} text-white`}>
                        Traffic & Ice Situation Map
                    </Link>
                    <Link href={"/weather"} className={`cursor-pointer px-4 py-2 ${currentPath === "/weather" ? "bg-baltice-middle-blue" : "bg-baltice-blue"} text-white`}>
                        Ice & Weather
                    </Link>
                    <Link href={"/reporting"} className={`cursor-pointer px-4 py-2 ${currentPath === "/reporting" ? "bg-baltice-middle-blue" : "bg-baltice-blue"} text-white`}>
                        Reporting
                    </Link>
                    <Link href={"/about"} className={`cursor-pointer px-4 py-2 ${currentPath === "/about" ? "bg-baltice-middle-blue" : "bg-baltice-blue"} text-white`}>
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
