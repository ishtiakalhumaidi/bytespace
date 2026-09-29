import {
  PencilRuler,
  CodeXml,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  type LucideIcon,
} from "lucide-react";

const PATHS_DATA = [
  { id: 1, title: "Design", icon: PencilRuler },
  { id: 2, title: "Development", icon: CodeXml },
  { id: 3, title: "IT & Software", icon: Laptop },
  { id: 4, title: "Business", icon: Building2 },
  { id: 5, title: "Marketing", icon: Megaphone },
  { id: 6, title: "Photography", icon: Camera },
];

export function LearningPaths() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-[100px] px-4 sm:px-6 bg-white">
      <div className="flex flex-col items-center gap-3 md:gap-[16px] w-full max-w-[917px] mb-10 md:mb-14">
        <h2 className="font-poppins text-[26px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-center w-full max-w-[792px] text-gray-900">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p className="font-satoshi text-[16px] md:text-[18px] font-normal leading-[1.6] text-center w-full text-gray-500">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-[24px] w-full max-w-[1200px]">
        {PATHS_DATA.map((path) => (
          <PathCard key={path.id} title={path.title} Icon={path.icon} />
        ))}
      </div>
    </section>
  );
}

function PathCard({ title, Icon }: { title: string; Icon: LucideIcon }) {
  return (
    <div className="flex flex-col items-center justify-center w-full aspect-square sm:aspect-auto sm:w-[167px] sm:h-[167px] gap-3 sm:gap-[16px] rounded-[24px] border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all shrink-0 cursor-pointer">
      <div className="flex items-center justify-center w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] bg-brand-yellow rounded-[40px] p-[10px] sm:p-[12px] shrink-0">
        <Icon className="w-full h-full text-gray-900" strokeWidth={2.5} />
      </div>

      <span className="font-satoshi font-medium text-[16px] sm:text-[20px] leading-[1.2] text-gray-900 text-center">
        {title}
      </span>
    </div>
  );
}