"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/lib/data";
import SkillBadge from "@/components/shared/SkillBadge";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function SkillGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-28 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="My"
            accent="Skills"
            description="Technologies I work with — from browser to server to database."
          />
        </AnimatedSection>

        <div className="space-y-14">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: catIndex * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              {/* Category label with rule */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#444]">
                  {category.label}
                </span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              {/* Icon grid: 3 cols mobile, 4 sm, 6 md+ */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: catIndex * 0.06 + skillIndex * 0.04,
                    }}
                    viewport={{ once: true }}
                  >
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
