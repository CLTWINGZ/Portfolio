import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container-page flex flex-col items-start justify-between gap-4 text-sm text-foreground/70 md:flex-row md:items-center">
      <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      <div className="flex gap-4" aria-label="Social links">
        <Link href={siteConfig.social.github}>GitHub</Link>
        <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
        <Link href={siteConfig.social.twitter}>Twitter</Link>
      </div>
    </div>
  </footer>
);
