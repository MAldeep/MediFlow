import { btns } from "./Btns";
import Link from "next/link";
interface HeaderBtnsProps {
  className: string;
}
export default function HeaderBtns({ className }: HeaderBtnsProps) {
  return (
    <div className={className}>
      {btns.map((el, idx) => (
        <Link
          key={idx}
          className={`${
            el.href === "/register"
              ? "bg-blue-950 text-white hover:bg-blue-900 duration-200"
              : "bg-transparent text-gray-500 hover:bg-blue-100 duration-200"
          } rounded-md px-3.5 py-2 text-[18px]`}
          href={el.href}
        >
          {el.text}
        </Link>
      ))}
    </div>
  );
}
