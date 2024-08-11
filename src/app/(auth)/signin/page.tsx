"use client";
import RegisterForm from "@/components/shared/form/RegisterForm";
import SignInForm from "@/components/shared/form/SignInForm";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <Suspense fallback={<Loader2 className="h-10 w- 10 animate-spin" />}>
      {type === "login" ? <SignInForm /> : null}
      {type === "register" ? <RegisterForm /> : null}
    </Suspense>
  );
};

export default LoginPage;
