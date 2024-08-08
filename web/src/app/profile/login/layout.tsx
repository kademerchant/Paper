import type { Metadata } from "next";
import { LoginProvider } from "./loginContext";

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
    <LoginProvider>
      <section className="w-full h-full mx-auto">{children}</section>
    </LoginProvider>
  );
}
