"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="container-page flex flex-wrap items-center justify-between gap-3 py-4" aria-label="Main navigation">
        <Link href="/" className="text-sm font-bold tracking-wide">
          Chethana Lakthilina
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-foreground/70 transition hover:text-foreground",
                  isActive && "text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a href="/Chethana-Lakthilina-CV.pdf" className="rounded-full border border-border px-3 py-1.5 text-sm">
            Download CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
