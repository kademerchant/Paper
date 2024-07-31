"use client";
import React, { ReactElement, useContext } from "react";
import RegisterContext from "./registerContext";

export default function RegisterForm():ReactElement {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error(
      "props are null -- RegisterContext -- ./src/app/profile/register/registerContext.tsx"
    );
  }

  const {
    name,
    setName,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    hidden,
    setHidden,
    handleSubmit,
  } = context;

  return (
    <main className="flex flex-col items-center justify-center w-4/5 sm:w-6/7 mx-auto min-h-full">
      <div className="sm:w-full md:w-4/6 lg:w-4/6 mb-40">
        <form
          className="flex justify-start flex-col items-center max-w-full"
          onSubmit={handleSubmit}
        >
          <label
            className="text-2xl sm:text-xl mt-4"
            aria-label="Enter your name"
          >
            Name
          </label>
          <input
            className="focus:outline-black focus:outline-1.5 focus:outline rounded w-full pl-1 pb-0.5 pt-1 font-quest"
            type="text"
            placeholder=" name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            className="text-xl font-quest mt-4"
            aria-label="Enter your email"
          >
            Email
          </label>
          <input
            className="focus:outline-black focus:outline-1.5 focus:outline rounded w-full pl-1 pb-0.5 pt-1 font-quest"
            type="text"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="text-xl font-quest mt-4"
            aria-label="Choose your username"
          >
            Username
          </label>
          <div className="font-quest text-[0.7rem] lg:text-base text-red-400">
            username must only contain letters, numbers and ' _ ', ' - ' <br/> and be 
            between 8-32 characters long.
          </div>
          <input
            className="focus:outline-black focus:outline-1.5 focus:outline rounded w-full pl-1 pb-0.5 pt-1 font-quest"
            type="text"
            placeholder="xAlexanderTheGreatx"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            className="text-xl font-quest mt-4"
            aria-label="Choose your password"
          >
            Password
          </label>
          <input
            className="focus:outline-black focus:outline-1.5 focus:outline rounded w-full pl-1 pb-0.5 pt-1 font-quest"
            type="password"
            placeholder="********"
            value={hidden}
            onChange={(e) => {
              setPassword(e.target.value);
              setHidden("*".repeat(e.target.value.length));
            }}
          />
          <button
            type="submit"
            className="w-3/5 mt-6 p-2 bg-none outline outline-1 outline-black font-quest text-l rounded"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
