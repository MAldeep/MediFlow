import { z } from "zod";

const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is Required" }),
    lastName: z.string().min(1, { message: "Last Name is Required" }),
    clinicName: z.string().min(1, { message: "Clinic Name is required" }),
    email: z.string().min(1, { message: "Email Address is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 character" })
      .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Password Confirmation is required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password must match",
    path: ["confirmPassword"],
  });

type registerType = z.infer<typeof registerSchema>;

export { registerSchema, type registerType };
