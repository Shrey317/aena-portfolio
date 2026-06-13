import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillGrid from "@/components/sections/SkillGrid";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <SkillGrid />
      <ExperienceTimeline />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
