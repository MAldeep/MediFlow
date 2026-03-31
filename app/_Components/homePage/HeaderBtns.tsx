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
          className="bg-[#0EA5E9] text-white rounded-md px-3 py-2.5 hover:bg-blue-950 duration-200 text-[18px]"
          href={el.href}
        >
          {el.text}
        </Link>
      ))}
    </div>
  );
}
