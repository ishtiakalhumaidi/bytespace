import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Logo } from "../ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-brand-blue">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
       <Logo className="text-white"/>

        {/* Center Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Join Us
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}