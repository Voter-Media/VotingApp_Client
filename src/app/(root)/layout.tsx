import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/header";
import Footer from "@/components/shared/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Voting App",
  description: "Created by the students of the University of the Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
