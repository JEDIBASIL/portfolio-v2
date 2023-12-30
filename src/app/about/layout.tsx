import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know me",
};

function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default AboutLayout;
