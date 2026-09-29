import Image from "next/image";
import { Star, BarChart } from "lucide-react";

interface CourseCardProps {
  imageSrc: string;
  lessons: number;
  duration: string;
  comments: number;
  title: string;
  author: string;
  level: string;
  price: number;
  rating: number;
}

export function CourseCard({
  imageSrc,
  lessons,
  duration,
  comments,
  title,
  author,
  level,
  price,
  rating,
}: CourseCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[373px] h-[384px] rounded-[24px] border border-gray-200 p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden mb-4 shrink-0">
        <Image src={imageSrc} alt={title} fill className="object-cover" />

        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <BlurBadge text={`${lessons} Lessons`} />
          <BlurBadge text={duration} />
          <BlurBadge text={`${comments} Comments`} />
        </div>
      </div>

      <div className="flex justify-between items-start mb-1">
        <h3 className="font-poppins font-bold text-[20px] leading-[1.2] text-black line-clamp-1">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-gray-500 shrink-0">
          <span className="font-satoshi text-[16px] font-medium text-gray-500">
            {rating}
          </span>
          <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
        </div>
      </div>

      <p className="font-satoshi text-[13px] mb-5">
        <span className="text-gray-500">by </span>
        <span className="text-blue-600">{author}</span>
      </p>

      <div className="flex items-center gap-4 mt-auto mb-5">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
          <BarChart className="w-4 h-4 text-gray-600" />
          <span className="font-satoshi text-[13px] font-medium text-gray-700">
            {level}
          </span>
        </div>

        <div className="flex items-center">
          <div className="flex -space-x-3 mr-0">
            <Avatar placeholderSrc="/assets/avatar/avatar-1.jpg" />
            <Avatar placeholderSrc="/assets/avatar/avatar-2.jpg" />
            <Avatar placeholderSrc="/assets/avatar/avatar-3.jpg" />
            <Avatar placeholderSrc="/assets/avatar/avatar-4.jpg" />
          </div>
          <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-[12px] font-poppins font-medium border-2 border-white text-black z-10 -ml-3">
            26+
          </div>
        </div>
      </div>

      <div className="font-poppins font-bold text-[24px] text-brand-blue leading-none">
        ${price}
        <span className="font-satoshi text-[13px] font-normal text-gray-500">
          /lifetime
        </span>
      </div>
    </div>
  );
}

function BlurBadge({ text }: { text: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full shrink-0">
      <span className="font-satoshi text-[11px] font-medium text-gray-800">
        {text}
      </span>
    </div>
  );
}

function Avatar({ placeholderSrc }: { placeholderSrc: string }) {
  return (
    <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden shrink-0 z-0">
      <Image src={placeholderSrc} alt="Student" fill className="object-cover" />
    </div>
  );
}