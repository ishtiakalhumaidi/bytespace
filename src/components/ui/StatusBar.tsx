export function StatusBar({ progress, colorClass = "bg-brand-yellow" }: { progress: number, colorClass?: string }) {
  return (
    <div className="w-full h-1.5 bg-gray-200/50 rounded-full overflow-hidden mt-2">
      <div className={`h-full ${colorClass} rounded-full`} style={{ width: `${progress}%` }} />
    </div>
  );
}