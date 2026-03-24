import Link from "next/link";
import { links } from "./Links";

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex w-1/3 justify-between items-center text-[#0F172A] font-bold text-[20px]">
      {links.map((el, idx) => (
        <Link key={idx} href={el.href}>
          {el.text}
        </Link>
      ))}
    </nav>
  );
}
