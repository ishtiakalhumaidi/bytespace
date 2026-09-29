"use client";

import { Button } from "@/components/ui/button";
import { FloatingAsset } from "../ui/FloatingAsset";

const DEMO_3D_ASSETS = [
  { id: 1, src: "/assets/3d/icon-7.png", alt: "Yellow Squiggle", className: "absolute top-[-5%] left-[-8%] w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] md:w-[200px] md:h-[200px] lg:left-[-5%] lg:w-[250px] lg:h-[250px]" },
  { id: 2, src: "/assets/3d/icon-2.png", alt: "White Squiggle", className: "absolute hidden sm:block top-[15%] left-[4%] sm:w-[80px] sm:h-[80px] md:w-[110px] md:h-[110px] lg:left-[8%] lg:w-[140px] lg:h-[140px]" },
  { id: 3, src: "/assets/3d/icon-1.png", alt: "White Cone", className: "absolute hidden sm:block bottom-[30%] left-[2%] sm:w-[90px] sm:h-[90px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px]" },
  { id: 4, src: "/assets/3d/icon-4.png", alt: "Yellow Torus", className: "absolute bottom-[-6%] left-[-8%] w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px] lg:left-[-2%] lg:w-[300px] lg:h-[300px]" },

  { id: 5, src: "/assets/3d/icon-5.png", alt: "Yellow Pyramid", className: "absolute hidden sm:block top-[10%] right-[8%] sm:w-[90px] sm:h-[90px] md:w-[130px] md:h-[130px] lg:right-[12%] lg:w-[160px] lg:h-[160px]" },
  { id: 6, src: "/assets/3d/icon-6.png", alt: "White Cylinder", className: "absolute top-[-5%] right-[-10%] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[290px] md:h-[290px] lg:right-[-5%] lg:w-[400px] lg:h-[400px]" },
  { id: 7, src: "/assets/3d/icon-7.png", alt: "Yellow Squiggle", className: "absolute bottom-[-6%] right-[-8%] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:right-[-5%] lg:w-[280px] lg:h-[280px]" },
];

export function CTASection() {
  return (
    <section
      className="relative w-full bg-brand-blue overflow-hidden py-16 md:py-[100px] lg:py-[140px] px-4 sm:px-6 [background-size:60px_60px] md:[background-size:120px_120px]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {DEMO_3D_ASSETS.map((asset) => (
          <FloatingAsset key={asset.id} asset={asset} />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex flex-col items-center text-center max-w-[850px]">
        <h2 className="font-poppins text-[30px] sm:text-[40px] md:text-[56px] font-semibold text-white leading-[1.2] tracking-[-0.01em] mb-4 md:mb-[24px]">
          Unlock Your Potential as a <br className="hidden md:block" /> Creator with ByteSpace
        </h2>

        <p className="font-satoshi text-[15px] md:text-[18px] font-normal text-white/90 leading-[1.7] max-w-[820px] mb-8 md:mb-[40px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Button
          className="bg-brand-yellow hover:bg-[#bce600] text-black font-poppins font-medium text-[16px] rounded-[24px] px-[32px] h-[52px] transition-colors"
        >
          Join as Creator
        </Button>
      </div>
    </section>
  );
}