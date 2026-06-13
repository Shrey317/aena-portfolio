import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — open to internships, full-time roles, and freelance projects.`,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <ContactForm />
    </main>
  );
}
