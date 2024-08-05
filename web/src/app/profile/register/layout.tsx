import type { Metadata } from "next";
import { RegisterProvider } from "./registerContext";

export const metadata: Metadata = {
  title: "Paper | Register",
  description: "Make an account",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RegisterProvider>
      <section className="w-full h-full mx-auto">{children}</section>
    </RegisterProvider>
  );
}
