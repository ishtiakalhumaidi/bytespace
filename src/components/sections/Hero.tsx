import Image from "next/image";
import { SearchSection } from "../ui/heroSearch";
import { HappyStudentsCard } from "../ui/HappyStudentsCard"; // Reusing your component

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-brand-blue overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
        backgroundPosition: "center top",
      }}
    >
      <div className="relative w-full max-w-[1440px] mx-auto  overflow-hidden">
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

        {/* Main Content Area */}
        <div className="mx-auto flex flex-col items-center text-center mt-[169px] max-w-[1200px] gap-[60px] relative z-10">
          <div className="flex flex-col items-center gap-[16px]">
            <h1 className="font-poppins text-[72px] font-semibold text-white leading-[1.2] tracking-[-0.01em] max-w-[935px]">
              Get Access to Hundreds <br /> Courses Available
            </h1>
            <p className="font-satoshi text-[18px] font-normal text-white/80 leading-[1.6] max-w-[819px]">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          <SearchSection />
        </div>

        {/* Hero Image Section */}
        <div className="relative mt-20 mx-auto h-[450px] max-w-3xl overflow-visible">
          {/* Lime Green Circle */}
          <div
            className="
      absolute
      left-1/2
      top-12
      -translate-x-1/2
      w-[550px] md:w-[640px]
      h-[550px] md:h-[640px]
      rounded-full
      bg-[#CBFC01]
      z-0
    "
          />

          {/* Main Character */}
          <div
            className="
      absolute
      left-1/2
      bottom-0
      -translate-x-1/2
      z-10
      w-[500px] md:w-[650px]
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

          {/* UI/UX Card */}
          <FloatingCard
            className="absolute top-20 left-4 md:left-10 z-20"
            title="UI/UX Design"
            subtitle="200 Courses • 1000+ Students"
          />

          {/* Progress */}
          <ProgressCard
            className="absolute top-32 right-0 md:-right-10 z-20"
            value="55%"
            progress={55}
          />

          {/* Happy Students */}
          <div className="absolute bottom-10 left-0 md:-left-10 z-20">
            <HappyStudentsCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Internal Micro-components for cards specific to Hero */
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
      className={`bg-white rounded-xl p-5 shadow-xl flex flex-col min-w-[180px] ${className}`}
    >
      <span className="font-satoshi text-[13px] text-gray-500 mb-1">
        Learning Progress
      </span>
      <span className="font-poppins text-[32px] font-bold text-gray-900">
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
