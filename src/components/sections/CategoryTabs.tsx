const ROW_1 = [
  "Featured", "Music", "Drawing & Painting", "Marketing", 
  "Animation", "Social Media", "UI/UX Design", "Creative Marketing"
];

const ROW_2 = [
  "Digital Illustration", "Film & Video", "Crafts", 
  "Freelance & Entrepreneurship", "Graphic Design", "Photography"
];

const ROW_3 = [
  "Productivity", "Web Development", "Data Science", "Cooking"
];

export function CategoryTabs() {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-[16px] w-full max-w-[1086px] mb-10 md:mb-16">
      <div className="flex flex-wrap justify-center gap-2 md:gap-[16px]">
        {ROW_1.map((cat) => (
          <CategoryButton key={cat} text={cat} isFeatured={cat === "Featured"} />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-[16px]">
        {ROW_2.map((cat) => (
          <CategoryButton key={cat} text={cat} />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-[16px]">
        {ROW_3.map((cat) => (
          <CategoryButton key={cat} text={cat} />
        ))}
        <button className="px-3 py-2 md:px-[16px] md:py-[12px] rounded-[24px] font-satoshi text-[13px] md:text-[14px] font-medium text-blue-600 hover:bg-blue-50 transition-colors">
          + More
        </button>
      </div>
    </div>
  );
}

function CategoryButton({ text, isFeatured = false }: { text: string; isFeatured?: boolean }) {
  return (
    <button
      className={`px-3 py-2 md:px-[16px] md:py-[12px] rounded-[24px] font-satoshi text-[13px] md:text-[14px] font-medium transition-colors ${
        isFeatured
          ? "bg-brand-yellow text-gray-900"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {text}
    </button>
  );
}