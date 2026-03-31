"use client";
import { CiMenuBurger } from "react-icons/ci";
import NavLinks from "./NavLinks";
import { useState } from "react";
import SideMenu from "./SideMenu";
import MediFlowLogo from "./MediFlowLogo";
import HeaderBtns from "./HeaderBtns";
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="w-full relative flex justify-between items-center px-4 lg:px-20 py-4 bg-white border-b border-b-[#E2E8F0]">
      {/* Logo */}
      <MediFlowLogo />
      {/* Burger Menu */}
      <CiMenuBurger
        className="flex lg:hidden text-[#0F172A] text-2xl"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && <SideMenu setIsOpen={setIsOpen} />}
      {/* Nav Links */}
      <NavLinks />
      {/* Sign In & Register Btns */}
      <HeaderBtns className="w-fit hidden lg:flex gap-3 items-center" />
    </header>
  );
}
