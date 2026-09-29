import { CoursesSection } from "@/components/sections/CoursesSection";
import { Hero } from "@/components/sections/Hero";
import { Sponsors } from "@/components/sections/Sponsors";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <Sponsors />
      <CoursesSection />
    </div>
  );
}
