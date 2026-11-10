import Link from "next/link";
import { Theme } from "@/components/Themes";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-16 py-4 flex items-center justify-between shadow-md
     bg-white/10  fixed top-0 left-0 z-50">
      {/* Brand Logo */}
      <Image
      src="/app/image/mylogo.png"
      alt="taskforge logo"
      width={32}
      height={32}
      className="rounded-md"
      />
      <Link href="/" className="text-4xl font-bold tracking-tight" style={{ color: Theme.primary }}>
        Task_Forge
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-white hover:opacity-80 transition-opacity font-medium">
          Home
        </Link>
        <Link href="/about" className="text-white hover:opacity-80 transition-opacity font-medium">
          About us
        </Link>
        <Link href="/contact" className="text-white hover:opacity-80 transition-opacity font-medium">
          Contact us
        </Link>
      </div>

      {/* Action Button */}
      <Link
        href="/login"
        className=" bg-yellow-950 px-5 py-2.5 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity shadow-sm"
        
      >
        Login
      </Link>
    </nav>
  );
}