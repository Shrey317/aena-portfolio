"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/types";
import TechTag from "./TechTag";

// Each project gets a distinct gradient palette
const GRADIENTS = [
  "from-violet-600/25 via-purple-700/10 to-transparent",
  "from-cyan-500/25 via-blue-600/10 to-transparent",
  "from-emerald-500/25 via-teal-600/10 to-transparent",
  "from-amber-500/25 via-orange-600/10 to-transparent",
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <motion.article
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-xl border border-white/8 bg-[#111] overflow-hidden"
    >
      {/* ── Gradient image placeholder ─────────────────────────────── */}
      <div
        className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* Large monogram as visual anchor */}
        <span className="font-mono text-5xl font-black text-white/10 select-none">
          {project.name
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase()}
        </span>
        {/* Subtle corner grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="text-base font-semibold text-[#f5f5f5] group-hover:text-violet-400 transition-colors leading-snug">
          {project.name}
        </h3>

        <p className="text-sm text-[#888] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        {/* CTA buttons */}
        {(project.liveUrl ?? project.repoUrl) && (
          <div className="flex gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium
                  transition-colors focus-visible:outline-violet-400"
              >
                <ExternalLink size={13} />
                Live ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  border border-white/10 hover:border-violet-500/50
                  text-[#888] hover:text-violet-400 text-sm font-medium
                  transition-colors focus-visible:outline-violet-400"
              >
                <Github size={13} />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
