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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormComponentProps = {
  type: string | null;
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
};

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  return URL.createObjectURL(event.target.files![0]);
}

const FormComponent = ({ type, onSubmit }: FormComponentProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const role = searchParams.get("role");

  const [preview, setPreview] = useState<string>("");

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
      description: "",
      imageUrl: "",
    },
  });

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  const updateRoleQueryParam = (newRole: string) => {
    router.push(`/signin?type=${type}&role=${newRole}`);
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
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
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
                      <SelectItem value="BEI">BEI</SelectItem>
                      <SelectItem value="BCT">BCT</SelectItem>
                      <SelectItem value="BME">BME</SelectItem>
                      <SelectItem value="BCE">BCE</SelectItem>
                      <SelectItem value="BEL">BEL</SelectItem>
                      <SelectItem value="BAG">BAG</SelectItem>
                      <SelectItem value="BAR">BAR</SelectItem>
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
                    onValueChange={(value) => {
                      field.onChange(value);
                      updateRoleQueryParam(value);
                    }}
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

        {role === "candidate" ? (
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Description Here</FormLabel>
                  <FormControl>
                    <Textarea rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="file"
                        name="imageUrl"
                        onChange={(event) => {
                          const displayUrl = getImageData(event);
                          setPreview(displayUrl);
                          onChange(displayUrl);
                        }}
                        className="h-40 flex items-center justify-center cursor-pointer outline-dashed outline-4 outline-primary ring-0 border-collapse"
                      />
                      {value !== "" ? (
                        <Image
                          src={preview}
                          width={100}
                          height={100}
                          className="absolute object-cover top-0 flex items-center justify-center h-full w-full pointer-events-none bg-white"
                          alt="Image"
                        />
                      ) : (
                        <div className="pointer-events-none absolute top-0 flex flex-col gap-2 items-center justify-center w-full h-full bg-white rounded-lg">
                          <CloudUpload className="w-1/5 h-1/5" />
                          Upload your Image
                        </div>
                      )}
                    </div>
                  </FormControl>
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
