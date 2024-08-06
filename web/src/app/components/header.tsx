"use client";

import { PiBookThin } from "react-icons/pi";
import MenuButton from "./customButtons/MenuButton";
import { useRouter } from "next/navigation";
import randomLightHex from "@/utils/randomHSL";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex flex-row justify-between items-center pt-3 pb-4 w-full sticky bg-[#fefbe7] border-solid border-black border-b-[1px] z-30 shadow-sm">
      <img
        className="ml-8 mt-2 cursor-pointer md:w-[45px] md:h-[45px] w-[25px] h-[25px]"
        aria-label="to homepage"
        src="/assets/PAPERLOGO.png"
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="text-3xl lg:text-5xl pb-2 font-quest-italic items-center cursor-default flex flex-row space-x-4">
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          p
        </h1>
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          a
        </h1>
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          p
        </h1>
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          e
        </h1>
        <h1
          style={{
            color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          r
        </h1>
      </div>
      <div className="mr-8 mt-2 cursor-pointer">
        <MenuButton />
      </div>
    </header>
  );
}
