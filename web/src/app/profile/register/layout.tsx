import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper | Register",
  description: "Make an account",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full mx-auto">
    {children}
    </section>
  );
}
