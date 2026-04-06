import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="w-full py-10 lg:py-20 px-7 flex flex-col lg:flex-row bg-linear-to-b from-blue-50 to-blue-100">
      {/* Hero Content */}
      <HeroContent />
      {/* Hero Image */}
      <HeroImage />
    </div>
  );
}
