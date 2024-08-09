import { formSchema } from "@/app/(auth)/signin/page";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormComponentProps = {
  type: string | null;
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
};

const FormComponent = ({ type, onSubmit }: FormComponentProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentId: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      gender: "Male",
      faculty: "BEI",
      level: "1st year",
      role: "guest",
    },
  });

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="space-y-2 flex flex-col justify-center min-h-[100vh] my-8"
      >
        <h2 className="text-center text-3xl font-semibold">
          {type === "register" ? "Register to Vote" : "Login to your account"}
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
        {type === "register" ? (
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full justify-center">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full justify-center">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ) : null}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {type === "register" ? (
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Password Again" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        {type === "register" ? (
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full justify-center">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="faculty"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full justify-center">
                  <FormLabel>Faculty</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a faculty" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* ["BEI", "BCT", "BME", "BCE", "BEL", "BAG", "BAR"] */}
                      <SelectItem value="bei">BEI</SelectItem>
                      <SelectItem value="bct">BCT</SelectItem>
                      <SelectItem value="bme">BME</SelectItem>
                      <SelectItem value="bce">BCE</SelectItem>
                      <SelectItem value="bel">BEL</SelectItem>
                      <SelectItem value="bag">BAG</SelectItem>
                      <SelectItem value="bar">BAR</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ) : null}
        {type === "register" ? (
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full justify-center">
                  <FormLabel>Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1st year">1st year</SelectItem>
                      <SelectItem value="2nd year">2nd year</SelectItem>
                      <SelectItem value="3rd year">3rd year</SelectItem>
                      <SelectItem value="4th year">4th year</SelectItem>
                      <SelectItem value="5th year">5th year</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full justify-center">
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="candidate">Candidate</SelectItem>
                      <SelectItem value="voter">Voter</SelectItem>
                      <SelectItem value="guest">Guest</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ) : null}
        <Button type="submit">
          {type === "register" ? "Register" : "Login"}
        </Button>
        {type === "register" ? (
          <Link
            href="/signin?type=login"
            className={buttonVariants({ variant: "link" })}
          >
            Already Registered? Login Instead &rarr;
          </Link>
        ) : (
          <Link
            href="/signin?type=register"
            className={buttonVariants({ variant: "link" })}
          >
            Don&apos;t have an account? Register &rarr;
          </Link>
        )}
      </form>
    </Form>
  );
};

export default FormComponent;
