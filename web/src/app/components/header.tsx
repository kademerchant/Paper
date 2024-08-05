"use client";

import { PiBookThin } from "react-icons/pi";
import { PiPaperPlaneThin } from "react-icons/pi";
import { useRouter } from "next/navigation";
import randomLightHex from "@/utils/randomHSL";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex flex-row justify-between items-center pt-3 pb-4 w-full sticky bg-[#fffbe5bd] border-solid border-black border-b-[1px] z-30 shadow-sm">
      <img
        className="ml-8 mt-2 cursor-pointer md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
        aria-label="to homepage"
        src="/assets/PAPERLOGO.png"
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="text-3xl lg:text-5xl font-quest-italic items-center cursor-default flex flex-row space-x-4">
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)"
          }}
        >
          p
        </h1>
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)"
          }}
        >
          a
        </h1>
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)"
          }}
        >
          p
        </h1>
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)"
          }}
        >
          e
        </h1>
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)"
          }}
        >
          r
        </h1>
      </div>
      <PiBookThin
        className="mr-8 "
        style={{ strokeWidth: "0.25", width: "25px", height: "25px" }}
      />
    </header>
  );
}
