import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import Container from "@/components/Container";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Register to Vote",
  description: "Register to vote in the upcoming election.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Container className="max-w-[480px]">{children}</Container>
      </body>
    </html>
  );
}
