import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Hope I'm capable enough?",
};
function CvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default CvLayout;
