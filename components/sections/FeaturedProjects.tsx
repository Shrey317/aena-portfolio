"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/lib/data";
import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <SectionHeader
          label="Featured"
          accent="Projects"
          description="A selection of full-stack applications built with modern web technologies."
        />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <AnimatedSection delay={0.2}>
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors group"
          >
            View All Projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
