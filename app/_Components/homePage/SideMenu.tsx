"use client";
import { IoMdClose } from "react-icons/io";
import { links } from "./Links";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";
import HeaderBtns from "./HeaderBtns";

interface SideMenuProps {
  setIsOpen: (value: boolean) => void;
}
export default function SideMenu({ setIsOpen }: SideMenuProps) {
  const menuRef = useRef(null);
  useGSAP(
    () => {
      // For entrance of the menu
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
      );
      // For Inside Links
      gsap.fromTo(
        ".link",
        {
          opacity: 0.4,
          y: 10,
          x: 10,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power1.in",
        },
      );
    },
    { scope: menuRef },
  );
  // For closure of menu
  const handleClose = () => {
    gsap.to(menuRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setIsOpen(false),
    });
  };
  return (
    <div
      className={`w-full h-screen bg-[#0F172A] flex flex-col
          px-4
          absolute top-0 left-0 z-50
        `}
      ref={menuRef}
    >
      <IoMdClose onClick={handleClose} className="text-3xl mt-8 text-white" />
      <div className="w-full h-full flex flex-col justify-center gap-6 items-center">
        {links.map((el, idx) => (
          <Link
            key={idx}
            href={el.href}
            className="text-white font-bold link text-3xl"
          >
            {el.text}
          </Link>
        ))}
        <HeaderBtns className="w-fit flex flex-col gap-3 items-center" />
      </div>
    </div>
  );
}
