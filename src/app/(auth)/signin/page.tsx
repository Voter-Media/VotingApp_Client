"use client";
import RegisterForm from "@/components/shared/form/RegisterForm";
import SignInForm from "@/components/shared/form/SignInForm";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { z } from "zod";

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
  description: z.string().optional(),
  imageUrl: z.string().optional(),
});

const LoginPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const token = localStorage.getItem("session_token");

  useEffect(() => {
    fetch("http://localhost:5000/api/getUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log("User is logged in:", data);
        } else {
          console.error("User is not logged in:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [token]);

  return (
    <>
      {type === "login" ? <SignInForm /> : null}
      {type === "register" ? <RegisterForm /> : null}
    </>
  );
};

export default LoginPage;
