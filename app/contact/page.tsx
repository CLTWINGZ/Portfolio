import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chethana Lakthilina for software engineering opportunities, collaborations, and consulting work.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <div className="container-page space-y-8 py-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="max-w-3xl text-foreground/70">Let’s discuss product ideas, engineering opportunities, or technical consulting.</p>
        <div className="flex gap-3 text-sm">
          <Link href={siteConfig.social.github}>GitHub</Link>
          <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
          <Link href={siteConfig.social.twitter}>Twitter</Link>
        </div>
      </header>
      <ContactForm />
    </div>
  );
}
