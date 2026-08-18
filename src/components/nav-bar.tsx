"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const SERVICE_LINKS = [
  { href: "/services/physical-therapy", label: "Physical Therapy" },
  { href: "/services/wellness", label: "Wellness & Personal Training" },
  { href: "/services/group-classes", label: "Group Classes" },
];

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61579726868070",
    src: "/assets/facebook.png",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/haideesuipt/",
    src: "/assets/instagram.png",
    label: "Instagram",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close both menus whenever navigation lands on a new page.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinkClass =
    "text-foreground hover:text-accent text-sm font-medium transition-colors duration-200";

  return (
    <nav className="bg-primary border-border sticky top-0 z-40 w-full border-b">
      {/* One row: links left, logo centered, socials and the booking block right.
          The logo is positioned rather than laid out so it stays optically
          centered no matter how wide the two side groups get. */}
      <div className="relative flex h-20 items-center justify-between px-4 sm:h-24 sm:px-6 lg:h-36 lg:px-8">
        {/* Left — full nav on desktop, hamburger below that */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>

          <div className="group relative">
            {/* Opens on hover, but also on click/tap — a hover-only trigger is
                unreachable on a touchscreen. */}
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
              className={`${navLinkClass} flex items-center gap-1`}
            >
              Services
              <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div
              className={`absolute left-0 top-full z-50 pt-3 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
                servicesOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="bg-primary border-border min-w-60 rounded-md border py-2 shadow-lg">
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="hover:bg-accent/10 hover:text-accent block px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="hover:bg-accent/10 -ml-2 rounded-lg p-2 transition-colors lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Center — large enough that the wordmark under the icon stays readable */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-label="Haidee Sui Physical Therapy — home"
        >
          {/* Margin-trimmed copy of the logo — the original carried ~20% empty
              padding, which shrank the wordmark at any given height. */}
          <Image
            src="/assets/haidee-logo-trimmed.png"
            alt="Haidee Sui Physical Therapy"
            width={466}
            height={380}
            priority
            className="h-14 w-auto object-contain sm:h-18 lg:h-32"
          />
        </Link>

        {/* Right — socials, then the booking block flush to the corner */}
        <div className="flex h-full items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-accent/10 rounded-lg p-1 transition-opacity duration-200 hover:opacity-70"
                aria-label={`Visit our ${social.label} page`}
              >
                <Image
                  src={social.src}
                  alt={social.label}
                  width={28}
                  height={28}
                  className="size-5 object-contain sm:size-6"
                />
              </Link>
            ))}
          </div>

          <Button
            asChild
            className="bg-accent hover:bg-accent/80 text-primary-foreground hidden h-11 rounded-md px-6 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 lg:inline-flex"
          >
            <Link href="/appointment">Book an Appointment</Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-border border-t px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            <Link href="/" className={`${navLinkClass} py-2`}>
              Home
            </Link>
            <Link href="/about" className={`${navLinkClass} py-2`}>
              About
            </Link>

            <p className="text-muted-foreground pt-3 text-xs font-semibold uppercase tracking-wide">
              Services
            </p>
            {SERVICE_LINKS.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`${navLinkClass} py-2 pl-3`}
              >
                {service.label}
              </Link>
            ))}

            <Link href="/pricing" className={`${navLinkClass} py-2 pt-3`}>
              Pricing
            </Link>
            <Link href="/#faq" className={`${navLinkClass} py-2`}>
              FAQ
            </Link>
            <Link href="/contact" className={`${navLinkClass} py-2`}>
              Contact
            </Link>

            <Button
              asChild
              className="bg-accent hover:bg-accent/80 text-primary-foreground mt-4 w-full rounded-none font-semibold uppercase tracking-wide"
            >
              <Link href="/appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
