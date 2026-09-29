"use client";

import Image from "next/image";
import { SearchSection } from "../ui/heroSearch";
import { HappyStudentsCard } from "../ui/HappyStudentsCard";
import { FloatingAsset } from "../ui/FloatingAsset";

const HERO_3D_ASSETS = [
  {
    id: 1,
    src: "/assets/3d/icon-7.png",
    alt: "Yellow Squiggle",
    className:
      "absolute top-[15%] left-[-6%] w-[90px] h-[90px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:left-[-2%] lg:w-[280px] lg:h-[280px]",
  },
  {
    id: 2,
    src: "/assets/3d/icon-2.png",
    alt: "White Squiggle",
    className:
      "absolute hidden sm:block top-[45%] left-[4%] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:left-[8%] lg:w-[150px] lg:h-[150px]",
  },
  {
    id: 3,
    src: "/assets/3d/icon-3.png",
    alt: "White Torus",
    className:
      "absolute bottom-[10%] left-[-8%] w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] lg:left-[-3%] lg:w-[320px] lg:h-[320px]",
  },
  {
    id: 4,
    src: "/assets/3d/icon-8.png",
    alt: "Yellow Cylinder",
    className:
      "absolute top-[15%] right-[-8%] w-[90px] h-[90px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:right-[-5%] lg:w-[280px] lg:h-[280px]",
  },
  {
    id: 5,
    src: "/assets/3d/icon-1.png",
    alt: "White Pyramid",
    className:
      "absolute hidden sm:block top-[50%] right-[3%] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:right-[5%] lg:w-[160px] lg:h-[160px]",
  },
  {
    id: 6,
    src: "/assets/3d/icon-2.png",
    alt: "White Squiggle",
    className:
      "absolute bottom-[15%] right-[-6%] w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] md:w-[190px] md:h-[190px] lg:right-[-4%] lg:w-[250px] lg:h-[250px]",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-brand-blue overflow-hidden [background-size:60px_60px] md:[background-size:120px_120px]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {HERO_3D_ASSETS.map((asset) => (
          <FloatingAsset key={asset.id} asset={asset} />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto overflow-visible">
        <div className="mx-auto flex flex-col items-center text-center mt-28 sm:mt-36 lg:mt-[169px] max-w-[1200px] gap-8 md:gap-[60px] px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 md:gap-[16px]">
            <h1 className="font-poppins text-[36px] sm:text-[48px] lg:text-[72px] font-semibold text-white leading-[1.2] tracking-[-0.01em] max-w-[935px]">
              Get Access to Hundreds <br className="hidden md:block" /> Courses Available
            </h1>
            <p className="font-satoshi text-[16px] md:text-[18px] font-normal text-white/80 leading-[1.6] max-w-[819px]">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          <SearchSection />
        </div>

        <div className="relative mt-12 md:mt-20 mx-auto w-full h-[240px] sm:h-[320px] md:h-[450px] max-w-3xl overflow-visible">
          <div
            className="
              absolute
              left-1/2
              top-6 md:top-12
              -translate-x-1/2
              w-[300px] sm:w-[420px] md:w-[640px]
              h-[300px] sm:h-[420px] md:h-[640px]
              rounded-full
              bg-[#CBFC01]
              z-0
            "
          />

          <div
            className="
              absolute
              left-1/2
              bottom-0
              -translate-x-1/2
              z-10
              w-[300px] sm:w-[420px] md:w-[650px]
            "
          >
            <Image
              src="/assets/students/student-2.png"
              alt="Student enjoying courses"
              width={800}
              height={800}
              className="
                w-full
                h-auto
                drop-shadow-2xl
              "
              priority
            />
          </div>

          <FloatingCard
            className="absolute top-8 left-2 sm:top-14 sm:left-4 md:top-20 md:left-10 z-20"
            title="UI/UX Design"
            subtitle="200 Courses • 1000+ Students"
          />

          <ProgressCard
            className="absolute top-16 right-2 sm:top-24 md:top-32 md:right-2 lg:-right-10 z-20"
            value="55%"
            progress={55}
          />

          <div className="absolute bottom-2 left-2 sm:bottom-6 md:bottom-10 md:left-2 lg:-left-10 z-20">
            <HappyStudentsCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  title,
  subtitle,
}: {
  className: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-xl p-2 md:p-4 shadow-lg flex flex-col gap-1 text-left ${className}`}
    >
      <span className="font-poppins text-[10px] md:text-xs font-semibold text-gray-800">
        {title}
      </span>
      {subtitle && (
        <span className="font-satoshi text-[8px] md:text-[10px] text-gray-500">
          {subtitle}
        </span>
      )}
    </div>
  );
}

function ProgressCard({
  className,
  value,
  progress,
}: {
  className: string;
  value: string;
  progress: number;
}) {
  return (
    <div
      className={`bg-white rounded-xl p-3 md:p-5 shadow-xl flex flex-col min-w-[120px] md:min-w-[180px] ${className}`}
    >
      <span className="font-satoshi text-[10px] md:text-[13px] text-gray-500 mb-1">
        Learning Progress
      </span>
      <span className="font-poppins text-[22px] md:text-[32px] font-bold text-gray-900">
        {value}
      </span>
      <div className="w-full h-1.5 bg-gray-200/50 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-brand-yellow rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}