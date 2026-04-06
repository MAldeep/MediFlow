"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { BsShieldCheck } from "react-icons/bs";

export default function HipaaSecurityInd() {
  useGSAP(() => {
    gsap.fromTo(
      ".hipaa",
      {
        opacity: 0.4,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
    );
  });
  return (
    <div className="w-fit px-2 py-1 bg-blue-200 flex gap-4 items-center rounded-4xl hipaa">
      <BsShieldCheck className="text-gray-500" />
      <p className="text-sm text-gray-500 font-semibold">
        HIPAA Complaint Security
      </p>
    </div>
  );
}
