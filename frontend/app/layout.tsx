import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { classNames } from "./lib/style";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Providers from "./components/providers/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Baltice.org",
    description: "Baltice.org Väyläpilvi version",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={classNames(inter.className)}>
                <div className="flex flex-col h-screen">
                    <Providers>
                        <Header />
                        <section className="grow">
                            {children}
                        </section>
                    </Providers>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
