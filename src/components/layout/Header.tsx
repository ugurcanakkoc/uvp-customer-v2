"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl py-8 px-6 md:px-12 border-b border-white/5">
            <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
                <div className="flex items-center gap-6">
                    <a
                        href="https://www.jwf.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity opacity-80 hover:opacity-100"
                    >
                        <Image
                            src="/jwf-logo.svg"
                            alt="JWF Logo"
                            width={180}
                            height={40}
                            className="h-12 md:h-14 w-auto object-contain"
                            priority
                        />
                    </a>

                    <div className="w-px h-14 bg-white/40 hidden md:block" />

                    <a
                        href="https://uvp-schaltschrankbau.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/logo.png"
                            alt="UVP Logo"
                            width={240}
                            height={80}
                            className="h-12 md:h-16 w-auto object-contain"
                            priority
                        />
                    </a>
                </div>
                <div className="flex gap-12 items-center">
                    <nav className="flex gap-8">
                        <Link href="/" className="text-[12px] font-bold tracking-[0.3em] text-white uppercase hover:text-neutral-400 transition-colors">Beispiele</Link>
                    </nav>
                    <span className="text-[12px] font-bold tracking-[0.4em] text-neutral-600 uppercase">2026</span>
                </div>
            </div>
        </header>
    );
}
