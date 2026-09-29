import { Logo } from "@/components/ui/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="min-h-screen w-full bg-brand-blue relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '120px 120px',
        backgroundPosition: 'center top'
      }}
    >
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
        <Logo className="text-white" />
      </div>

  
      <main className="relative z-10 flex min-h-screen items-center justify-center pt-24 pb-12 px-6">
        <div className="w-full max-w-[1200px]">
          {children}
        </div>
      </main>
    </div>
  );
}