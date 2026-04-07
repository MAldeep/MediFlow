import AboutIllustration from "./AboutIllustration";
import AboutTitleAndHookQ from "./AboutTitleAndHookQ";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-blue-50 py-6 px-4 lg:px-8">
      {/* Title and Qs */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <AboutTitleAndHookQ />
        <AboutIllustration />
      </div>
      {/* main Points nd here will be the main features after determinatio*/}
    </div>
  );
}
