import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — Computer Engineer and Full-Stack MERN Web Developer based in Valsad, Gujarat.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <AboutContent />
    </main>
  );
}
