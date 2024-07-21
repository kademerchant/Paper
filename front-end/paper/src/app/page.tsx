"use client";
import ThreeScene from "./three/main";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-grow items-center justify-center h-full w-full">
      <ThreeScene aria-label="homepage art" />
    </div>
  );
}
