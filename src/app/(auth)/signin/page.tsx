"use client";
import RegisterForm from "@/components/shared/form/RegisterForm";
import SignInForm from "@/components/shared/form/SignInForm";
import { getSessionToken } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const token = getSessionToken();

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
    <Suspense>
      {type === "login" ? <SignInForm /> : null}
      {type === "register" ? <RegisterForm /> : null}
    </Suspense>
  );
};

export default LoginPage;
