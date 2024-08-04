import { ReactElement } from "react";
import randomLightHex from "@/utils/randomHSL";

export default function Background(): ReactElement {
  return (
    <>
      <div className="absolute top-50 left-50 w-full z-10">
        <div className="inline-block animate-loop-scroll space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className={`inline-block text-9xl font-quest-italic`}
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 85),
              }}
            >
              Register
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-9xl font-quest-italic"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 85),
              }}
            >
              Register
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute top-60 left-50 w-full max-hoverflow-x-auto z-10">
        <div className="inline-block animate-loop-scroll-two space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-9xl font-quest"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 80),
              }}
            >
              Register
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-9xl font-quest"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 80),
              }}
            >
              Register
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute top-[42.5%] left-50 w-full max-hoverflow-x-auto z-10">
        <div className="inline-block animate-loop-scroll space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className={`inline-block text-9xl font-quest-italic`}
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 75),
              }}
            >
              Register
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-9xl font-quest-italic"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 75),
              }}
            >
              Register
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute top-[61.5%] left-50 w-full max-hoverflow-x-auto z-10">
        <div className="inline-block animate-loop-scroll-two space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-9xl font-quest"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 70),
              }}
            >
              Register
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-9xl font-quest"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 70),
              }}
            >
              Register
            </h1>
          ))}
        </div>
      </div>
      <div className="absolute top-[81%] left-50 w-full max-hoverflow-x-auto z-10">
        <div className="inline-block animate-loop-scroll space-x-8 leading-loose whitespace-nowrap">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className={`inline-block text-9xl font-quest-italic`}
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 65),
              }}
            >
              Register
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className="inline-block text-9xl font-quest-italic"
              style={{
                color: randomLightHex(Math.floor(Math.random() * 360), 36, 65),
              }}
            >
              Register
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}
