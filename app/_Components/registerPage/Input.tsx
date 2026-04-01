import { useGSAP } from "@gsap/react";
import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import gsap from "gsap/all";

type InputProps<TFieldValue extends FieldValues> = {
  label: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  placeHolder: string;
} & InputHTMLAttributes<HTMLInputElement>;
export default function Input<TFieldValue extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  placeHolder,
  ...rest
}: InputProps<TFieldValue>) {
  useGSAP(() => {
    gsap.fromTo(
      ".registerLabel",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1.in",
      },
    );
  });
  return (
    <div className="w-full flex flex-col gap-0.5 relative">
      <label className="text-sm lg:text-2xl text-blue-950 registerLabel">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        {...register(name)}
        {...rest}
        className="border border-gray-200 rounded-2xl p-2 shadow-md outline-0"
      />
      {error && (
        <p className="absolute -bottom-5 left-5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
