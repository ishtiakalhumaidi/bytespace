import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


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


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${clashDisplay.variable} ${satoshi.variable} font-satoshi antialiased`}>
        {children}
      </body>
    </html>
  );
}