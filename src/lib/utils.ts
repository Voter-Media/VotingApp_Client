import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSessionToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("session_token") || "";
  }
};

export const formSchema = z.object({
  studentId: z.string().regex(/PUR[0-9]{3}[A-Z]{3}[0-9]{3}/, {
    message: "Invalid student ID. It should be in the format PUR078BME001",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  confirmPassword: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(["Male", "Female", "Other"]),
  faculty: z.enum(["BEI", "BCT", "BME", "BCE", "BEL", "BAG", "BAR"]),
  level: z.enum(["1st year", "2nd year", "3rd year", "4th year", "5th year"]),
  role: z.enum(["voter", "candidate", "guest", "admin"]),
  party: z.enum(["NSU", "ANFSU", "KRANTIKARI", "SAMAJBADI", "CHEBISANGH"]),
  position: z.enum(["President", "Vice President", "Secretary", "Treasurer"]),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
});
