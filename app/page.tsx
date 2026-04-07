import About from "./_Components/homePage/About";
import Footer from "./_Components/homePage/Footer";
import Header from "./_Components/homePage/Header";
import Hero from "./_Components/homePage/Hero";

export default function Home() {
  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen relative overflow-hidden">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Footer */}
      <Footer />
    </div>
  );
}
