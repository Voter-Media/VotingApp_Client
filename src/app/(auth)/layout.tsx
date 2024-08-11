import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import Container from "@/components/Container";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

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
      <body className={`mx-4 ${urbanist.className}`}>
        <Container className="max-w-[480px]">
          <Suspense fallback={<Loader2 className="h-20 w-20 animate-spin" />}>
            {children}
          </Suspense>
        </Container>
      </body>
    </html>
  );
}
