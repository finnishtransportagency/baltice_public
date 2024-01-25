import Image from 'next/image';
import Link from 'next/link'

import upArrow from "@/public/svg/upArrow.svg";
import footerLogo from "@/public/svg/footerLogo.svg";

export default function Footer() {
    return (
        <section className="pt-0 flex flex-col">
            <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-center mt-4 
                                w-max bg-baltice-light-blue border-baltice-blue border-x border-t">
                    <div className="flex flex-col bg-baltice-light-blue -mb-5 z-10 px-8 pt-2 items-center">
                        <Image src={upArrow} alt="" />
                        <Link href="#top" className="text-baltice-blue">
                            Back to Top
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-baltice-light-blue py-10 border-baltice-blue border-t">
                <div className="flex items-center justify-center">
                    <Image src={footerLogo} alt="" />
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Link href={"/"} className="text-baltice-blue">
                        Home
                    </Link>
                    <span className="text-gray-400 px-2">-</span>
                    <Link href={"/ships"} className="text-baltice-blue">
                        Ships & Restrictions
                    </Link>
                    <span className="text-gray-400 px-2">-</span>
                    <Link href={"/traffic"} className="mr-2 text-baltice-blue">
                        Traffic & Ice Situation Map
                    </Link>
                    <span className="text-gray-400 px-2">-</span>
                    <Link href={"/ice"} className="text-baltice-blue">
                        Ice & Weather
                    </Link>
                    <span className="text-gray-400 px-2">-</span>
                    <Link href={"/reporting"} className="text-baltice-blue">
                        Reporting
                    </Link>
                    <span className="text-gray-400 px-2">-</span>
                    <Link href={"/about"} className="text-baltice-blue">
                        About
                    </Link>
                </div>
            </div>
            <div className="text-baltice-light-blue flex text-white items-center justify-center bg-baltice-blue py-4">
                    <span>© Baltic Icebreaking Management, 2023 </span>
                    <span className="px-2" >|</span>
                    <Link href={"/privacy"}>
                        Liability and disclaimer
                    </Link>
                </div>
        </section>
    );
}
