import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/Logo";

const FOOTER_LINKS = [
  {
    id: "col-1",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    id: "col-2",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    id: "col-3",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function Footer() {
  return (
    <footer className="w-full bg-white pt-[80px] pb-[40px] px-6 border-t border-gray-100">
      <div className="mx-auto flex flex-col w-full max-w-[1200px]">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-[60px] lg:gap-[100px] mb-[80px]">
          
          {/* Left Column: Branding & Newsletter */}
          <div className="flex flex-col w-full lg:max-w-[420px] gap-6">
            <Logo className="text-gray-900" />
            
            <p className="font-satoshi text-[16px] text-gray-600 leading-[1.6]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            {/* Newsletter Form */}
            <form className="flex items-center gap-4 mt-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-[52px] rounded-full border-gray-300 px-6 font-satoshi text-[15px] focus-visible:ring-brand-yellow"
                required
              />
              <Button
                type="submit"
                className="h-[52px] px-8 rounded-full bg-brand-yellow hover:bg-[#bce600] text-black font-poppins font-medium text-[16px] shrink-0 transition-colors"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="font-satoshi text-[13px] text-gray-500 leading-[1.6]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links Grid */}
          <div className="flex w-full lg:w-auto flex-1 justify-between gap-8 flex-wrap md:flex-nowrap pt-4">
            {FOOTER_LINKS.map((column) => (
              <div key={column.id} className="flex flex-col gap-5 min-w-[140px]">
                {column.links.map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-satoshi text-[16px] text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-[32px] border-t border-gray-200 gap-6">
          <span className="font-satoshi text-[14px] text-gray-500">
            @ 2023 ByteSpace. All rights reserved.
          </span>
          
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-satoshi text-[14px] text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}