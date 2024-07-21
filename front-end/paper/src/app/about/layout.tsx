import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper | About",
  description: "About Paper",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex-grow">
      {children}
    </section>
  )
}