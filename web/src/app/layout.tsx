import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Paper | Home",
  description: "Paper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Questrial&display=swap" rel="stylesheet"/>
        <link ref="icon" href=""/>
      </Head>
      <body className=" bg-[#FEFBEA] flex flex-col justify-start align-center min-h-screen h-full overflow-hidden">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
