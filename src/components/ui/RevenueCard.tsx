import { StatusBar } from "./StatusBar";

export function RevenueCard({
  className,
  title,
  date,
  amount,
  progress,
  badge,
}: {
  className?: string;
  title: string;
  date: string;
  amount: string;
  progress: number;
  badge?: string;
}) {
  return (
    <div
      className={`bg-blue-600 rounded-[16px] p-[16px] shadow-xl flex flex-col gap-[8px] text-white ${className}`}
    >
      <div className="flex flex-col">
        <span className="font-satoshi text-[13px] text-blue-100 leading-tight">
          {title}
        </span>
        <span className="font-satoshi text-[11px] text-blue-200">{date}</span>
      </div>

      <span className="font-poppins text-[18px] font-bold leading-none">
        {amount}
      </span>

      <div className="mt-1">
        <StatusBar progress={progress} colorClass="bg-brand-yellow" />
      </div>

      {badge && (
        <div className="mt-auto w-fit bg-brand-yellow text-black font-satoshi font-bold text-[10px] px-2 py-0.5 rounded-[12px]">
          {badge}
        </div>
      )}
    </div>
  );
}

