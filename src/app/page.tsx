"use client";

import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { projects } from "@/data/projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-screen smoke-bg flex flex-col pt-[160px]">
      {/* Global Spotlight */}
      <div className="fixed inset-0 pointer-events-none spotlight-global z-0" />

      {/* Title / Info Bar */}
      <div className="flex-grow flex flex-col px-6 md:px-12 z-10">
        <div className="flex justify-between items-end py-12 md:py-16">
          <div className="flex flex-col gap-4">
            <span className="luxury-heading">SCHALTSCHRANKBAU LÖSUNGEN</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              BEISPIELE
            </h1>
          </div>
          <div className="hidden md:flex flex-col items-end gap-3 text-right">
            <span className="text-[12px] text-neutral-700 tracking-[0.8em] font-black italic uppercase">
              HÖCHSTE PRÄZISION
            </span>
            <div className="h-[2px] w-48 bg-neutral-800" />
          </div>
        </div>

        {/* The 4-card Grid */}
        <div className="flex-grow mb-16 flex flex-col">
          <ProjectGallery projects={projects.slice(0, 4)} />
        </div>

        {/* Status Area / Footer Integrated */}
        <div className="pb-12 flex justify-between items-center border-t border-white/5 pt-8">
          <div className="flex items-center gap-6">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-neutral-500 uppercase">
              UVP SCHALTSCHRANKBAU GMBH // SYSTEM AKTIV
            </span>
          </div>
          <div className="hidden sm:block text-[10px] text-neutral-700 tracking-[0.5em] font-medium uppercase">
            &copy; {new Date().getFullYear()} ALLE RECHTE VORBEHALTEN
          </div>
        </div>
      </div>
    </div>
  );
}
