import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { StatusBar } from "../ui/StatusBar";
import { RevenueCard } from "../ui/RevenueCard";
import { HappyStudentsCard } from "../ui/HappyStudentsCard";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const CHECKLIST = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function FeatureSection() {
  return (
    <section className="relative w-full flex flex-col items-center py-16 md:py-[100px] px-4 sm:px-6 gap-16 md:gap-[120px] overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] top-[-250px] left-[-200px] lg:w-[1137px] lg:h-[1137px] lg:top-[-466px] lg:left-[-152px] -z-10 pointer-events-none blur-[40px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      <div
        className="absolute w-[340px] h-[340px] top-[700px] left-[-170px] lg:w-[672px] lg:h-[672px] lg:top-[946px] lg:left-[-287px] -z-10 pointer-events-none blur-[40px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-[1258px] lg:h-[552px] gap-10 lg:gap-[63px]">
        <div className="flex flex-col w-full lg:w-1/2 max-w-[600px] gap-4 md:gap-6 z-10">
          <h2 className="font-poppins font-semibold text-[28px] sm:text-[36px] xl:text-[44px] leading-[1.2] tracking-[-0.01em] text-gray-900">
            Your Path to Professional <br className="hidden md:block" /> Growth
            Starts Here!
          </h2>

          <p className="font-satoshi font-normal text-[16px] md:text-[18px] leading-[1.6] text-gray-500 max-w-[500px]">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className="flex items-start justify-between w-full max-w-[231px] gap-[16px] mt-2 md:mt-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-poppins font-semibold text-[24px] md:text-[28px] text-blue-600">
                  {stat.value}
                </span>
                <span className="font-satoshi text-[14px] text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 max-w-[621px] h-[300px] sm:h-[400px] lg:h-[552px] flex justify-center items-end">
          <div className="absolute left-[-0px] top-[15%] z-0 hidden lg:block origin-top-left scale-[0.7] opacity-90">
            <CourseCard
              imageSrc="/assets/courseThumbnail/course-1.jpg"
              lessons={17}
              duration="2 hours 16 mins"
              comments={59}
              title="Learn Figma from Basic"
              author="purepearl studio"
              level="Beginner"
              price={25}
              rating={4.5}
            />
          </div>

          <Image
            src="/assets/students/student-2.png"
            alt="Student with laptop"
            fill
            className="object-contain object-bottom z-10"
          />

          <ProgressCard
            className="absolute right-4 lg:right-12 top-1/4 z-20 hidden md:flex"
            value="55%"
            progress={40}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1258px] lg:h-[552px] gap-10 lg:gap-[63px]">
        <div className="relative w-full lg:w-1/2 max-w-[621px] h-[300px] sm:h-[400px] lg:h-[552px] flex justify-center items-end">
          <Image
            src="/assets/students/student-1.png"
            alt="Student with tablet"
            fill
            className="object-contain object-bottom z-10"
          />

          <RevenueCard
            className="absolute left-0 top-[44px] z-0 hidden md:flex w-[232px] h-[119px]"
            title="Total Revenue"
            date="July 1-28"
            amount="$120.29"
            progress={70}
          />
          <RevenueCard
            className="absolute left-0 top-[194px] z-0 hidden md:flex w-[134px] h-[135px]"
            title="Year to Date"
            date="2023"
            amount="$1,200.38"
            progress={40}
            badge="+12$"
          />

          <HappyStudentsCard className="absolute right-4 lg:right-16 bottom-[15%] z-20 hidden md:flex" />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 max-w-[600px] gap-4 md:gap-6 lg:pl-10 z-10">
          <h2 className="font-poppins font-semibold text-[28px] sm:text-[36px] xl:text-[44px] leading-[1.2] tracking-[-0.01em] text-gray-900">
            Create & Manage <br className="hidden md:block" /> Courses Easily.
          </h2>

          <p className="font-satoshi font-normal text-[16px] md:text-[18px] leading-[1.6] text-gray-500 max-w-[500px]">
            ByteSpace supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>

          <div className="flex flex-col gap-3 md:gap-4 mt-2 md:mt-4">
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-blue-600 fill-blue-50" />
                <span className="font-satoshi font-medium text-[16px] text-gray-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
      <StatusBar progress={progress} colorClass="bg-brand-yellow" />
    </div>
  );
}