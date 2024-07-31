"use client";
import React, { ReactElement } from "react";
import RegisterForm from "./registerForm"

export default function Register(): ReactElement {
 
  return (
    <>
      <div className="flex flex-row pt-1 whitespace-nowrap w-full overflow-x-hidden">
        <div className="inline-block animate-loop-scroll space-x-4 ">
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className=" inline-block text-2xl font-quest-italic"
            >
              Register
            </h1>
          ))}
          {[...Array(140)].map((_, index) => (
            <h1
              key={index}
              className=" inline-block text-2xl font-quest-italic"
            >
              Register
            </h1>
          ))}
        </div>
      </div>
      <RegisterForm/>
    </>
  );
}
