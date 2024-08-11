"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  studentId: z.string().regex(/PUR[0-9]{3}[A-Z]{3}[0-9]{3}/, {
    message: "Invalid student ID. It should be in the format PUR078BME001",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const SignInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentId: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form Data", data);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login Response", response);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("session_token", data.token);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Suspense>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 flex flex-col justify-center min-h-[100vh] my-8"
        >
          <h2 className="text-center text-3xl font-semibold">
            Log In to your account
          </h2>
          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student ID</FormLabel>
                <FormControl>
                  <Input placeholder="PUR078BEI023" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Login</Button>
          <Link
            href="/signin?type=register"
            className={buttonVariants({ variant: "link" })}
          >
            Don&apos;t have an account? Register &rarr;
          </Link>
        </form>
      </Form>
    </Suspense>
  );
};

export default SignInForm;
