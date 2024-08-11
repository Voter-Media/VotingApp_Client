import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSessionToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("session_token") || "";
  }
};
