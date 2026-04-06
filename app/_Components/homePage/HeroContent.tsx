import Link from "next/link";
import HipaaSecurityInd from "./HipaaSecurityInd";

export default function HeroContent() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center lg:items-start">
      {/* For HIPAA */}
      <HipaaSecurityInd />
      {/* Head */}
      <h1 className="text-5xl lg:text-7xl text-blue-950 font-bold text-center lg:text-start">
        Seamless Medical Records For
        <span className="text-5xl lg:text-7xl text-blue-900 font-bold ml-1.5">
          Modern Practices
        </span>
      </h1>
      {/* paragraph */}
      <p className="text-2xl text-gray-500 text-center lg:text-start">
        Streamline your clinical workflow with an intuitive platform designed
        for speed and security. Manage patient files, scheduling, and billing in
        one unified, editorial-grade interface.
      </p>
      {/* buttons */}
      <div className="w-full flex flex-col lg:flex-row items-center gap-4">
        <Link
          href="/register"
          className="w-full lg:w-1/2 py-4 bg-blue-950 text-white rounded-md text-center text-2xl font-semibold hover:bg-blue-900 duration-300 transition-all"
        >
          Get Started
        </Link>
        <Link
          href="/register"
          className="w-full lg:w-1/2 py-4 bg-gray-300 text-gray-700 rounded-md text-center text-2xl font-semibold hover:bg-gray-400 hover:text-gray-900 duration-300 transition-all"
        >
          Schedule a Demo
        </Link>
      </div>
    </div>
  );
}
