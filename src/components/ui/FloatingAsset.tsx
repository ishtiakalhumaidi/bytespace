"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";


export interface AssetData {
  id: number;
  src: string;
  alt: string;
  className: string;
}

interface FloatingAssetProps {
  asset: AssetData;
}

export function FloatingAsset({ asset }: FloatingAssetProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      y: -20,
      rotation: () => Math.random() * 15 - 7.5,
      duration: 2.5 + Math.random(),
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, { scope: imageRef });

  return (
    <div className={asset.className}>
      <div ref={imageRef} className="relative w-full h-full flex items-center justify-center">
        
       
        
        
        <Image 
          src={asset.src} 
          alt={asset.alt} 
          fill 
          className="object-contain" 
        /> 
       
      </div>
    </div>
  );
}