import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/ui/CourseCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { FloatingAsset } from "@/components/ui/FloatingAsset";

export default function SignUpPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px] w-full">
      
      {/* Left Column: Text & Graphic Cluster */}
      <div className="flex flex-col w-full lg:w-1/2 max-w-[500px]">
        <h1 className="font-poppins font-semibold text-[32px] text-white leading-tight mb-4">
          Sign up and come in
        </h1>
        <p className="font-satoshi text-[16px] text-white/80 leading-[1.6] mb-12">
          The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
        </p>

     
        <div className="relative w-full h-[550px] hidden md:block">
           
           <FloatingAsset 
             asset={{ id: 1, src: "/assets/3d/icon-4.png", alt: "3D Icon", className: "absolute top-[20px] left-[15px] z-20 w-[100px] h-[100px]" }} 
           />

           <div className="absolute left-0 top-[100px] z-0 shadow-lg">
             <CourseCard 
                imageSrc="/assets/courseThumbnail/course-2.jpg"
                lessons={17} duration="2 hours 16 mins" comments={59}
                title="Build Digital Asset" author="purepearl studio"
                level="Beginner" price={25} rating={4.5}
             />
           </div>
           
           <div className="absolute left-[70px] top-[0px] z-10 shadow-2xl">
             <CourseCard 
                imageSrc="/assets/courseThumbnail/course-3.jpg"
                lessons={17} duration="2 hours 16 mins" comments={59}
                title="the Power of Big Data" author="purepearl studio"
                level="Beginner" price={25} rating={4.5}
             />
           </div>

           <FloatingAsset 
             asset={{ id: 2, src: "/assets/3d/icon-2.png", alt: "3D Icon", className: "absolute top-[260px] right-[-50px] z-30 w-[140px] h-[140px]" }} 
           />

           <div className="absolute right-[-20px] bottom-[80px] z-20 shadow-2xl">
             <HappyStudentsCard className="bg-brand-yellow border border-[#bce600]" /> 
           </div>

           <FloatingAsset 
             asset={{ id: 3, src: "/assets/3d/icon-5.png", alt: "3D Icon", className: "absolute bottom-[20px] left-[10px] z-30 w-[140px] h-[140px]" }} 
           />

        </div>
      </div>

      {/* Right Column: White Auth Form Card */}
      <div className="w-full max-w-[500px] bg-white rounded-[32px] p-[40px] md:p-[60px] shadow-2xl shrink-0">
        <span className="font-satoshi text-blue-600 text-[14px] font-medium block mb-2">Create an Account</span>
        <h2 className="font-poppins font-semibold text-[40px] text-gray-900 leading-[1.1] mb-8">
          Welcome to <br /> ByteSpace
        </h2>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-satoshi text-[14px] font-medium text-gray-700">Full Name</label>
            <Input 
              type="text" 
              placeholder="Jamie Davis" 
              className="h-[52px] rounded-[12px] border-gray-200 px-4 font-satoshi text-[15px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-satoshi text-[14px] font-medium text-gray-700">Email</label>
            <Input 
              type="email" 
              placeholder="designer@example.com" 
              className="h-[52px] rounded-[12px] border-gray-200 px-4 font-satoshi text-[15px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-satoshi text-[14px] font-medium text-gray-700">Password</label>
            <Input 
              type="password" 
              placeholder="********" 
              className="h-[52px] rounded-[12px] border-gray-200 px-4 font-satoshi text-[15px]"
            />
          </div>

          <div className="flex justify-end mt-2">
            <Button className="bg-brand-yellow hover:bg-[#bce600] text-black font-poppins font-medium text-[16px] rounded-full px-8 h-[48px]">
              Continue
            </Button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-[1px] flex-1 bg-gray-200" />
          <span className="font-satoshi text-[14px] text-gray-400">or</span>
          <div className="h-[1px] flex-1 bg-gray-200" />
        </div>

        {/* Social Logins */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button className="flex items-center justify-center w-[60px] h-[60px] rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <FacebookIcon className="w-6 h-6 text-gray-900" />
          </button>
          <button className="flex items-center justify-center w-[60px] h-[60px] rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <GoogleIcon className="w-6 h-6 text-gray-900" /> 
          </button>
        </div>

        <p className="text-center font-satoshi text-[14px] text-gray-500">
          Already have an account? <Link href="/signin" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>

    </div>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
    </svg>
  );
}