"use client";
import Link from "next/link";
import { links } from "./Links";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="w-1/3 hidden lg:flex justify-center items-center text-[20px] gap-10">
      {links.map((el, idx) => {
        const isActive = pathname === el.href;
        return (
          <Link
            className={`transition-all duration-300 
              ${
                isActive
                  ? "text-blue-950 underline underline-offset-8 decoration-2"
                  : "text-gray-500"
              }`}
            key={idx}
            href={el.href}
          >
            {el.text}
          </Link>
        );
      })}
    </nav>
  );
}
