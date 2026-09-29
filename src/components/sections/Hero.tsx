import Image from "next/image";
import { SearchSection } from "../ui/heroSearch";

export function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 overflow-hidden">
      {/* Decorative Assets */}
      <div className="absolute top-10 left-10 w-32 h-32 -z-10 animate-pulse">
        <Image
          src="/assets/decor-squiggle-yellow.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-40 right-20 w-24 h-24 -z-10">
        <Image
          src="/assets/decor-cylinder-green.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content Area - Mapped to 1200x345 container with 60px gap */}
      <div className="mx-auto flex flex-col items-center text-center mt-[169px] max-w-[1200px] gap-[60px] relative z-10">
        
        {/* Text Container */}
        <div className="flex flex-col items-center gap-[16px]">
          <h1 className="font-poppins text-[72px] font-semibold text-white leading-[1.2] tracking-[-0.01em] max-w-[935px]">
            Get Access to Hundreds <br /> Courses Available
          </h1>

          <p className="font-satoshi text-[18px] font-normal text-white/80 leading-[1.6] max-w-[819px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        {/* Search Bar Component */}
        <SearchSection />
      </div>

      {/* Hero Image Section */}
      <div className="relative mt-20 max-w-3xl mx-auto h-[400px]">
        <div className="absolute inset-0 z-10 flex justify-center">
          <Image
            src="/assets/hero-student.png"
            alt="Student enjoying courses"
            width={500}
            height={500}
            className="object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </div>

        <FloatingCard
          className="bottom-10 left-0 z-20"
          title="UI/UX Design"
          subtitle="200 Courses • 1000+ Students"
        />
        <FloatingCard
          className="top-20 right-0 z-20"
          title="Learning Progress"
          value="55%"
        />
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  title,
  subtitle,
  value,
}: {
  className: string;
  title: string;
  subtitle?: string;
  value?: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-xl p-4 shadow-lg flex flex-col gap-1 text-left ${className}`}
    >
      <span className="font-poppins text-xs font-semibold text-gray-800">
        {title}
      </span>
      {subtitle && (
        <span className="font-satoshi text-[10px] text-gray-500">
          {subtitle}
        </span>
      )}
      {value && (
        <div className="flex items-center gap-2 mt-1">
          <span className="font-poppins text-2xl font-bold text-black">
            {value}
          </span>
          <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-[55%] h-full bg-brand-yellow rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
}