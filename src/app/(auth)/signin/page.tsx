"use client";
import FormComponent from "@/components/shared/form";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

export const formSchema = z.object({
  studentId: z.string().regex(/PUR[0-9]{3}[A-Z]{3}[0-9]{3}/, {
    message: "Invalid student ID. It should be in the format PUR078BME001",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  confirmPassword: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(["Male", "Female", "Other"]),
  faculty: z.enum(["BEI", "BCT", "BME", "BCE", "BEL", "BAG", "BAR"]),
  level: z.enum(["1st year", "2nd year", "3rd year", "4th year", "5th year"]),
  role: z.enum(["voter", "candidate", "guest", "admin"]),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
});

const LoginPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <>
      <FormComponent type={type} />
    </>
  );
};

export default LoginPage;
