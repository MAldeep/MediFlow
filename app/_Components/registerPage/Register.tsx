"use client";
import {
  registerSchema,
  registerType,
} from "@/app/_validation/UserRegisterSchema";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import gsap from "gsap/all";
import Input from "./Input";

export default function Register() {
  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { isValid, isSubmitting, errors },
  } = useForm<registerType>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });
  const submitRegisterForm: SubmitHandler<registerType> = (data) => {
    console.log(data);
  };
  // For Animations Only!!
  useGSAP(() => {
    gsap.fromTo(
      ".registerHeader",
      {
        x: -10,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.in",
      },
    );
  });
  return (
    <form
      className="w-full flex flex-col items-center border border-gray-200 rounded-3xl py-3 lg:py-6 px-2 lg:px-5 shadow-md gap-4"
      onSubmit={handleSubmit(submitRegisterForm)}
    >
      <h1 className="text-start w-full text-blue-950 text-4xl font-semibold registerHeader">
        Clinic Registeration Form
      </h1>
      {/* Name Inputs */}
      <div className="w-full flex flex-col lg:flex-row gap-3 justify-between items-center">
        <Input
          label="First Name"
          name="firstName"
          placeHolder="Provide Your First Name"
          register={register}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name"
          name="lastName"
          placeHolder="Provide Your Last Name"
          register={register}
          error={errors.lastName?.message}
        />
      </div>
      {/* Clinic Name Input */}
      <Input
        label="Clinic Name"
        name="clinicName"
        placeHolder="Provide Clinic Name"
        register={register}
        error={errors.clinicName?.message}
      />
      {/* Email Input  */}
      <Input
        label="Email"
        name="email"
        placeHolder="example@gmail.com"
        register={register}
        error={errors.email?.message}
        type="email"
      />
      {/* password Input */}
      <Input
        label="Password"
        name="password"
        placeHolder="********"
        register={register}
        error={errors.password?.message}
        type="password"
      />
      {/* Confirm Password Input */}
      <Input
        label="Confirm Password"
        name="confirmPassword"
        placeHolder="********"
        register={register}
        error={errors.confirmPassword?.message}
        type="password"
      />
      <button
        type="submit"
        className="w-full text-2xl bg-blue-950 text-white rounded-md p-2 cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </form>
  );
}
