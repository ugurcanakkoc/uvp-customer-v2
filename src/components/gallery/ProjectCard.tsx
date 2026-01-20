"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { useRef, useState } from "react";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
    index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative w-full h-full group cursor-pointer overflow-hidden border border-white/5 bg-[#0a0a0a]"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            ref={cardRef}
        >
            <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-contain object-center transition-all duration-1000 opacity-40 grayscale scale-100 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                sizes="25vw"
            />

            {/* Dynamic Lighting Overlay */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.08), transparent 40%)`
                }}
            />

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                <h3 className="text-lg md:text-xl font-bold tracking-widest uppercase text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                    {project.title}
                </h3>
                <div className="h-[1px] w-0 bg-white transition-all duration-700 group-hover:w-full mt-2" />
                <p className="mt-4 text-[9px] text-neutral-500 font-medium tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {project.specs?.type} // Details ansehen
                </p>
            </div>
        </motion.div>
    );
}
