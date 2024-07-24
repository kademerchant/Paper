"use client";

import { PiBookThin } from "react-icons/pi";
import { PiPaperPlaneThin } from "react-icons/pi";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex flex-row justify-between items-center pt-3 pb-2 w-full sticky bg-[#FEFBEA]">
      <PiPaperPlaneThin
        className="ml-8 mt-2 hover:stroke-white cursor-pointer"
        style={{ strokeWidth: "1", width: "25px", height: "25px" }}
        aria-label="to homepage"
        onClick={() => {
          router.push("/");
        }}
      />
      <p className="text-3xl lg:text-4xl font-quest items-center cursor-default">
        paper
      </p>
      <PiBookThin
        className="mr-8 "
        style={{ strokeWidth: "0.25", width: "25px", height: "25px" }}
      />
    </header>
  );
}
