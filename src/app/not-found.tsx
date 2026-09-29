import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main
      className="min-h-screen w-full bg-brand-blue relative flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
        <Logo className="text-white" />
      </div>

      <div className="relative flex flex-col items-center justify-center w-full max-w-[1200px] mt-10">
        
        {/* Giant 404 Background Text */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] flex items-center justify-center w-full md:w-[920px] h-auto md:h-[480px] z-0 select-none pointer-events-none"
        >
          <span 
            className="font-poppins font-semibold text-[200px] md:text-[480px] leading-none tracking-[-0.01em] text-transparent bg-clip-text text-center"
            style={{
              backgroundImage: "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)"
            }}
          >
            404
          </span>
        </div>

     
        <div className="relative z-10 flex flex-col items-center text-center mt-[80px] md:mt-[180px]">
          <h1 className="font-poppins font-semibold text-[40px] md:text-[64px] text-white leading-[1.2] tracking-[-0.01em]">
            The page you are looking <br className="hidden md:block" /> for doesn’t exist
          </h1>
          
          <p className="font-satoshi text-[16px] text-white/80 mt-6 mb-10 max-w-[400px] md:max-w-none">
            Try to use a correct url or go back to homepage to start again
          </p>
          
          {/* Replaced <Button asChild> with a direct, styled <Link> */}
          <Link 
            href="/"
            className="inline-flex items-center justify-center bg-brand-yellow hover:bg-[#bce600] text-black font-poppins font-medium text-[16px] rounded-full px-8 h-[48px] transition-colors"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}