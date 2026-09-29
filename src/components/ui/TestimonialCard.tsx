import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export function TestimonialCard({
  name,
  role,
  quote,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[374px] h-auto lg:min-h-[432px] lg:min-w-0 lg:flex-1 p-5 md:p-[24px] rounded-[24px] bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
      <div className="relative w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full overflow-hidden mb-4 md:mb-[24px] bg-gray-200 shrink-0">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-1 mb-4 md:mb-[24px]">
        <span className="font-poppins text-[18px] md:text-[20px] font-bold text-gray-900 leading-tight">
          {name}
        </span>
        <span className="font-satoshi text-[15px] md:text-[16px] font-medium text-blue-600">
          {role}
        </span>
      </div>

      <p className="font-satoshi text-[14px] md:text-[15px] text-gray-500 leading-[1.7]">
        &quot;{quote}&quot;
      </p>
    </div>
  );
}