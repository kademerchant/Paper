import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Paper | Login",
  description: "Login to your account",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <section className="w-full h-full mx-auto">{children}</section>
  );
}