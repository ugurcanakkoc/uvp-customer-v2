"use client";

import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
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
    <div className="relative h-screen w-screen smoke-bg flex flex-col pt-[88px]">
      {/* Global Spotlight */}
      <div className="fixed inset-0 pointer-events-none spotlight-global z-0" />

      {/* Title / Info Bar */}
      <div className="flex-grow flex flex-col px-12 z-10">
        <div className="flex justify-between items-end py-12">
          <div className="flex flex-col gap-2">
            <span className="luxury-heading">INDUSTRIAL SOLUTIONS</span>
            <h1 className="text-7xl font-black tracking-tighter uppercase leading-none">
              PROJELERİMİZ
            </h1>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-[10px] text-neutral-700 tracking-[0.8em] font-black italic uppercase">
              ULTRA PRECISION
            </span>
            <div className="h-[2px] w-32 bg-neutral-800" />
          </div>
        </div>

        {/* The 4-card Grid */}
        <div className="flex-grow mb-12">
          <ProjectGallery projects={projects.slice(0, 4)} />
        </div>

        {/* Status Area */}
        <div className="pb-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase">
              SYSTEM ACTIVE // HIGH VOLTAGE CAPABILITY
            </span>
          </div>
          <div className="text-[9px] text-neutral-700 tracking-[0.5em] font-medium uppercase">
            &copy; 2026 UVP INDUSTRIAL FABRICATION
          </div>
        </div>
      </div>
    </div>
  );
}
