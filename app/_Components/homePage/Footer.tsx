import Link from "next/link";
import HipaaSecurityInd from "./HipaaSecurityInd";
import MediFlowLogo from "./MediFlowLogo";

export default function Footer() {
  const footerLinks: {
    text: string;
    href: string;
  }[] = [
    {
      text: "Privacy Policy",
      href: "/privacy",
    },
    {
      text: "Terms of Service",
      href: "/terms",
    },
    {
      text: "Security",
      href: "/security",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];
  return (
    <footer className="w-full h-[30dvh] flex flex-col lg:flex-row items-center justify-between bg-linear-to-b from-blue-100 to-blue-50  border-t-2 border-t-gray-300 px-0 lg:px-12 py-2">
      {/* Left Side */}
      <div className="flex flex-col gap-5">
        <MediFlowLogo />
        <HipaaSecurityInd />
      </div>
      {/* Right Side */}
      <div className="flex justify-center lg:justify-between gap-2.5  h-full items-end flex-wrap">
        {footerLinks.map((el, idx) => (
          <Link
            key={idx}
            href={el.href}
            className="text-sm lg:text-[18px] text-gray-600 hover:underline"
          >
            {el.text}
          </Link>
        ))}
      </div>
    </footer>
  );
}
