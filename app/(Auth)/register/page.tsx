import Header from "@/app/_Components/homePage/Header";
import Register from "@/app/_Components/registerPage/Register";

export default function RegisterPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#F8FAFC] relative">
      <Header />
      <div className="w-full h-full px-3 lg:px-20 py-3 lg:py-5">
        <Register />
      </div>
    </div>
  );
}
