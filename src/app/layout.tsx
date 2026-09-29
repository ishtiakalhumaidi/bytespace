import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Font configurations
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.woff2",
  variable: "--font-clash",
});

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "ByteSpace - Get Access to Courses",
  description: "Unlock your creativity and gain valuable knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${poppins.variable} ${clashDisplay.variable} ${satoshi.variable} font-satoshi antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}