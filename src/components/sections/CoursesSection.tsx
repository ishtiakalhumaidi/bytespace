import { CourseCard } from "@/components/ui/CourseCard";
import { CategoryTabs } from "./CategoryTabs";


const COURSES_DATA = [
  {
    id: 1,
    imageSrc: "/assets/courseThumbnail/course-1.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    level: "Beginner",
    price: 25,
    rating: 4.5,
  },
  {
    id: 2,
    imageSrc: "/assets/courseThumbnail/course-2.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Build Digital Asset",
    author: "purepearl studio",
    level: "Beginner",
    price: 25,
    rating: 4.5,
  },
  {
    id: 3,
    imageSrc: "/assets/courseThumbnail/course-3.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "The Power of Big Data",
    author: "purepearl studio",
    level: "Beginner",
    price: 25,
    rating: 4.5,
  },
  {
    id: 4,
    imageSrc: "/assets/courseThumbnail/course-4.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    level: "Beginner",
    price: 25,
    rating: 4.5,
  },
  {
    id: 5,
    imageSrc: "/assets/courseThumbnail/course-5.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Mastering Money Management",
    author: "purepearl studio",
    level: "Beginner",
    price: 25,
    rating: 4.5,
  },
  {
    id: 6,
    imageSrc: "/assets/courseThumbnail/course-6.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    level: "Beginner",
    price: 25,
    rating: 4.5,
  },
];

export function CoursesSection() {
  return (
    <section className="w-full flex flex-col items-center pt-[100px] pb-[100px] px-6 bg-[#f9f9f9]">
      
      <div className="flex flex-col items-center gap-[16px] w-full max-w-[917px] mb-12">
        <h2 className="font-poppins text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-center w-full max-w-[588px] text-gray-900">
          Discover Your Passion, <br /> Build Your Skills
        </h2>
        
        <p className="font-satoshi text-[18px] font-normal leading-[1.6] text-center w-full max-w-[917px] text-gray-500">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>

      <CategoryTabs/>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] w-full max-w-[1199px]">
        {COURSES_DATA.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      
    </section>
  );
}