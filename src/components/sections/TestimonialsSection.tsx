import { TestimonialCard } from "@/components/ui/TestimonialCard";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: "/assets/avatar/avatar-1.jpg",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: "/assets/avatar/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: "/assets/avatar/avatar-3.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full flex flex-col items-center py-16 md:py-[120px] px-4 sm:px-6 gap-10 md:gap-[60px] overflow-hidden bg-[#fafafa]">
      <div className="absolute top-0 left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-brand-yellow/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start w-full max-w-[1200px] lg:h-[145px] gap-4 lg:gap-[43px]">
        <h2 className="w-full lg:w-1/2 font-poppins font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-gray-900">
          Discover What Our <br className="hidden md:block" /> Community Is Saying
        </h2>

        <p className="w-full lg:w-1/2 font-satoshi font-normal text-[15px] md:text-[16px] leading-[1.6] text-gray-600 max-w-[600px]">
          At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap lg:flex-nowrap justify-center w-full max-w-[1204px] gap-6 md:gap-[41px]">
        {TESTIMONIALS_DATA.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            quote={testimonial.quote}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </section>
  );
}