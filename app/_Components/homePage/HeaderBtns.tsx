import React from "react";
import { btns } from "./Btns";
import Link from "next/link";

export default function HeaderBtns() {
  return (
    <div className="w-fit hidden lg:flex gap-3 items-center">
      {btns.map((el, idx) => (
        <Link
          key={idx}
          className="bg-[#0EA5E9] rounded-md px-3 py-2.5 hover:bg-blue-950 duration-200 text-[18px]"
          href={el.href}
        >
          {el.text}
        </Link>
      ))}
    </div>
  );
}
