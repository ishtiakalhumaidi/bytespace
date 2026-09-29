import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react"; 

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function Navbar() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        {/* Using a placeholder for the logo graphic */}
        <div className="w-8 h-8 bg-brand-yellow rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm" />
        <span className="font-clash text-2xl font-semibold tracking-wide text-white">
          ByteSpace
        </span>
      </Link>

      {/* Center Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Link href="/signin" className="text-sm font-medium text-white/80 hover:text-white">
          Sign In
        </Link>
        <Link href="/join" className="text-sm font-medium text-white/80 hover:text-white">
          Join Us
        </Link>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <ShoppingBag className="w-5 h-5" />
          <span className="sr-only">Cart</span>
        </Button>
      </div>
    </header>
  );
}