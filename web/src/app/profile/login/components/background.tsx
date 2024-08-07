import { ReactElement } from "react";
import randomLightHex from "@/utils/randomHSL";

export default function Background(): ReactElement {
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen z-[11] bg-black opacity-35 md:opacity-[10%]" />
      <div className="absolute top-[8.5%] left-50 w-full z-10">
        <div className="inline-block animate-loop-scroll space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className={`inline-block text-8xl md:text-9xl font-quest-italic`}
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-8xl md:text-9xl font-quest-italic"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 76),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute top-[25%] left-50 w-full max-hoverflow-x-auto z-10">
        <div className="inline-block animate-loop-scroll-two space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-8xl md:text-9xl font-quest"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 73),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-8xl md:text-9xl font-quest"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 73),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute top-[43%] left-50 w-full max-hoverflow-x-auto z-10">
        <div className="inline-block animate-loop-scroll space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className={`inline-block text-8xl md:text-9xl font-quest-italic`}
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 70),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-8xl md:text-9xl font-quest-italic"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 70),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute top-[62%] left-50 w-full max-hoverflow-x-auto z-10">
        <div className="inline-block animate-loop-scroll-two space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-8xl md:text-9xl font-quest"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 67),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-8xl md:text-9xl font-quest"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 67),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute top-[80%] left-50 w-full max-hoverflow-x-auto z-10">
        <div className="inline-block animate-loop-scroll space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className={`inline-block text-8xl md:text-9xl font-quest-italic`}
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 64),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-8xl md:text-9xl font-quest-italic"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 64),
                textShadow: "4px 4px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              Login
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}
