"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { hasSocialLink } from "@/lib/utils";

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="py-28 max-w-6xl mx-auto px-6">
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden p-10 sm:p-16 text-center border border-violet-500/20"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(124,58,237,0.12) 0%, rgba(17,17,17,0.8) 70%)",
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">
            Open to opportunities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] leading-tight mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-[#888] max-w-lg mx-auto leading-relaxed mb-10">
            Whether you have a project in mind, a job opportunity, or just want
            to connect — I&apos;m always open to a conversation.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                bg-violet-600 hover:bg-violet-700 text-white font-medium
                transition-colors focus-visible:outline-violet-400"
            >
              <Mail size={18} />
              {siteConfig.links.email}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                border border-white/10 hover:border-violet-500/40
                text-[#888] hover:text-violet-400 font-medium
                transition-colors"
            >
              Message form →
            </Link>
          </div>

          {/* Social row */}
          <div className="flex items-center justify-center gap-6">
            {hasSocialLink(siteConfig.links.github) && (
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#666] hover:text-violet-400 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {hasSocialLink(siteConfig.links.linkedin) && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#666] hover:text-violet-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            <a
              href={`tel:${siteConfig.links.phone}`}
              aria-label="Phone"
              className="text-[#666] hover:text-violet-400 transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
