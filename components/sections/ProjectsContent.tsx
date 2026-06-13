"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/shared/ProjectCard";
import TechTag from "@/components/shared/TechTag";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

// Collect every unique tech tag across all projects
function getAllTechTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tech.forEach((t) => tagSet.add(t)));
  return ["All", ...Array.from(tagSet).sort()];
}

export default function ProjectsContent() {
  const prefersReducedMotion = useReducedMotion();
  const allTags = useMemo(() => getAllTechTags(), []);
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? projects
        : projects.filter((p) => p.tech.includes(activeTag)),
    [activeTag]
  );

  return (
    <div className="max-w-6xl mx-auto px-6 pb-28">
      <AnimatedSection>
        <SectionHeader
          label="All"
          accent="Projects"
          description="Every project I've built — filter by technology below."
        />
      </AnimatedSection>

      {/* ── Filter bar ───────────────────────────────────────────────── */}
      <AnimatedSection delay={0.1} className="mb-10">
        <div
          className="flex flex-wrap gap-2 justify-center"
          role="group"
          aria-label="Filter projects by technology"
        >
          {allTags.map((tag) => (
            <TechTag
              key={tag}
              size="md"
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </TechTag>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Project grid ─────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={activeTag}
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        ) : (
          // Empty state
          <motion.div
            key="empty"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? {} : { opacity: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center mb-4">
              <Layers size={24} className="text-[#555]" />
            </div>
            <p className="text-[#888] font-medium">
              No projects tagged with{" "}
              <span className="text-violet-400">{activeTag}</span>
            </p>
            <button
              onClick={() => setActiveTag("All")}
              className="mt-4 text-sm text-violet-400 hover:underline"
            >
              Show all projects
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
