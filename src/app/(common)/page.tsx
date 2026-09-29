import { CoursesSection } from "@/components/sections/CoursesSection";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { Sponsors } from "@/components/sections/Sponsors";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <Sponsors />
      <CoursesSection />
      <LearningPaths />
      <FeatureSection />
      <CTASection />
      <TestimonialsSection/>
    </div>
  );
}
