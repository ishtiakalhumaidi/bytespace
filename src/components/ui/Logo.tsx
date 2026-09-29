import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "text-gray-900" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 w-fit">
      <Image
        src="/assets/Vector.png"
        alt="ByteSpace Logo"
        width={24}
        height={24}
        className="h-8 w-8 object-contain"
      />
      <span className={`font-clash text-2xl font-semibold tracking-wide ${className}`}>
        ByteSpace
      </span>
    </Link>
  );
}