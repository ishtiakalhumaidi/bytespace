import Image from "next/image";

const PARTNER_LOGOS = [
  { id: 1, src: "/assets/sponsors/logoipsum-1.png", alt: "Partner Logo 1" },
  { id: 2, src: "/assets/sponsors/logoipsum-2.png", alt: "Partner Logo 2" },
  { id: 3, src: "/assets/sponsors/logoipsum-3.png", alt: "Partner Logo 3" },
  { id: 4, src: "/assets/sponsors/logoipsum-4.png", alt: "Partner Logo 4" },
  { id: 5, src: "/assets/sponsors/logoipsum-5.png", alt: "Partner Logo 5" },
];

export function Sponsors() {
  return (
    /* Partners Logo Section */
    <section className="w-full h-[212px] flex justify-center items-center mt-[80px] bg-[#f5f5f6] py-8">
   
      <div className="flex w-full max-w-[1132px] h-[42px] gap-[72px] items-center justify-center overflow-hidden">
        
        {PARTNER_LOGOS.map((logo) => (
          <div
            key={logo.id}
            className="relative flex items-center justify-start w-[170px] h-[41px] shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain object-left"
            />
          </div>
        ))}
        
      </div>
    </section>
  );
}