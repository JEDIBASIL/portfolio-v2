import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const acorn = localFont({
  src: [{ path: "../assets/fonts/acorn.woff" }],
  variable: "--font-acorn",
});

const gt = localFont({
  src: [{ path: "../assets/fonts/gt.woff" }],
  variable: "--font-gt",
});

export const metadata: Metadata = {
  title: "Jedibasil | Works",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${acorn.variable} ${gt.variable}`}>{children}</body>
    </html>
  );
}
