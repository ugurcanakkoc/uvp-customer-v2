"use client";

import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black py-8 px-12 border-b border-white/5">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-xl font-black tracking-[0.4em] uppercase">
                    UVP<span className="text-neutral-500 font-light tracking-[0.2em] ml-1">SYSTEMS</span>
                </Link>
                <div className="flex gap-10">
                    <span className="luxury-heading">PORTFOLIO // 2026</span>
                </div>
            </div>
        </header>
    );
}
