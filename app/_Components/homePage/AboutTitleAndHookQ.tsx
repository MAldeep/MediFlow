export default function AboutTitleAndHookQ() {
  return (
    <div className=" flex flex-col gap-7">
      <small className="text-blue-400 text-center lg:text-start">
        Precision Care Infrastructure
      </small>
      <h2 className="text-5xl lg:text-7xl text-blue-950 w-full lg:w-3xl text-center lg:text-start font-bold">
        Why Practitioners Choose{" "}
        <span className="text-5xl lg:text-7xl text-blue-900 font-bold">
          MediFlow
        </span>
      </h2>
      <p className=" text-center ml-0 lg:ml-3 lg:text-start text-gray-500 w-full lg:w-2xl">
        Built by clinicians, for clinicians. We focus on the administrative
        burden so you can focus on patient care.
      </p>
    </div>
  );
}
