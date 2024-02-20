import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// These styles apply to every route in the application
import "./globals.css";
// Imports Components
import Navbar from "@/components/Navbar";

const mainFontFamily = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfólio Web",
  description: "Desenvolvimento de um Portfólio Web com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-[5000px]">
      <body className={'${mainFontFamily.className} bg-pink-900'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
