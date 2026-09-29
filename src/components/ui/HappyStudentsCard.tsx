import { Star } from "lucide-react";
import Image from "next/image";

export function HappyStudentsCard({ className }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl p-2.5 md:p-4 shadow-xl flex flex-col gap-1 md:gap-2 min-w-[150px] md:min-w-[220px] ${className ?? ""}`}
    >
      <div className="flex flex-col">
        <span className="font-poppins font-medium text-[12px] md:text-[15px] text-gray-900">
          Happy Students
        </span>
        <div className="flex items-center gap-1">
          <span className="font-satoshi font-bold text-[10px] md:text-[12px] text-gray-900">
            4.5
          </span>
          <span className="font-satoshi text-[10px] md:text-[12px] text-gray-500">(240)</span>
          <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-brand-yellow text-brand-yellow" />
        </div>
      </div>

      <div className="flex items-center mt-1 md:mt-2">
        <div className="flex -space-x-2 md:-space-x-3 mr-0">
          <Avatar placeholderSrc="/assets/avatar/avatar-1.jpg" />
          <Avatar placeholderSrc="/assets/avatar/avatar-2.jpg" />
          <Avatar placeholderSrc="/assets/avatar/avatar-3.jpg" />
          <Avatar placeholderSrc="/assets/avatar/avatar-4.jpg" />
        </div>
        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-brand-yellow flex items-center justify-center text-[9px] md:text-[11px] font-poppins font-bold border-2 border-white text-black z-10 -ml-2 md:-ml-3">
          2K+
        </div>
      </div>
    </div>
  );
}

function Avatar({ placeholderSrc }: { placeholderSrc: string }) {
  return (
    <div className="relative w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white bg-gray-200 overflow-hidden shrink-0 z-0">
      <Image src={placeholderSrc} alt="Student" fill className="object-cover" />
    </div>
  );
}