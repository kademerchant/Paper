"use client";
import React, { ReactElement, useContext } from "react";
import RegisterContext from "../registerContext";
import { handleKeyDown } from "../utils/formHandlers";

export default function RegisterForm(): ReactElement {
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
    handleSubmit,
    isNameInvalid,
    isUsernameInvalid,
    isEmailInvalid,
    isPasswordInvalid,
    userExists,
  } = context;

  return (
    <main className="flex px-[20px] flex-col items-center justify-center w-full md:w-[850px] mx-auto h-full">
      <div className="w-full md:w-4/6 lg:w-4/6 pb-8 pt-4 px-10 border border-slate-600 rounded-[5px] shadow-xl bg-[#fcf9e8] z-20">
        <form
          className="flex justify-start flex-col items-center max-w-full"
          onSubmit={handleSubmit}
        >
          {userExists && (
            <p className="font-quest text-[0.7rem] lg:text-base text-red-400 mb-4">
              username or email is already associated with an account
            </p>
          )}
          <label
            className="text-xl sm:text-xl pb-2 block font-quest"
            aria-label="Enter your name"
          >
            Name
          </label>
          <div className="w-full relative mb-8">
            <input
              className={`focus:outline-black focus:outline-1.5 focus:outline ${
                isNameInvalid(name)
                  ? "focus:outline-red-400"
                  : "focus:outline-black"
              } rounded w-full pl-1 pb-0.5 pt-1 font-quest`}
              type="text"
              placeholder=" name..."
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            {isNameInvalid(name) && (
              <div className="absolute top-full left-0 font-quest text-[0.7rem] lg:text-base text-red-400 mt-1">
                A-Z and whitespace only 
              </div>
            )}
          </div>
          <label
            className="text-xl font-quest mt-4 pb-2 block"
            aria-label="Enter your email"
          >
            Email
          </label>
          <div className="w-full relative mb-8">
            <input
              className={`focus:outline-black focus:outline-1.5 focus:outline ${
                (email.length > 5 && isEmailInvalid(email)) || userExists
                  ? "focus:outline-red-400"
                  : "focus:outline-black"
              } rounded w-full pl-1 pb-0.5 pt-1 font-quest`}
              type="text"
              placeholder="example@gmail.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {email.length > 5 && isEmailInvalid(email) && (
              <div className="absolute top-full left-0 font-quest text-[0.7rem] lg:text-base text-red-400 mt-1">
                must provide a valid email
              </div>
            )}
          </div>
          <label
            className="text-xl font-quest mt-4 pb-2 block"
            aria-label="Choose your username"
          >
            Username
          </label>
          <div className="w-full relative mb-8">
            <input
              className={`focus:outline-black focus:outline-1.5 focus:outline ${
                isUsernameInvalid(username) || userExists
                  ? "focus:outline-red-400"
                  : "focus:outline-black"
              } rounded w-full pl-1 pb-0.5 pt-1 font-quest`}
              type="text"
              placeholder="xAlexanderTheGreatx"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            {isUsernameInvalid(username) && (
              <div className="absolute top-full left-0 font-quest text-[0.7rem] lg:text-base text-red-400 mt-1">
                A-Z, '-' '_' and numbers only
              </div>
            )}
          </div>
          <label
            className="text-xl font-quest mt-4 pb-2 block"
            aria-label="Choose your password"
          >
            Password
          </label>
          <div className="w-full relative">
            <input
              className={`focus:outline-black focus:outline-1.5 focus:outline ${
                password.length > 0 && isPasswordInvalid(password)
                  ? "focus:outline-red-400"
                  : "focus:outline-black"
              } rounded w-full pl-1 pb-0.5 pt-1 font-quest`}
              type="password"
              placeholder="********"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            {password.length > 0 && isPasswordInvalid(password) && (
              <div className="absolute top-full left-0 font-quest text-xs md:text-sm text-red-400 mt-1">
                A-Z, at least 1 special char and at least 1 capital
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-3/6 mt-10 p-2 bg-[#e79ca9] text-white border-solid border-[1px] outline outline-1 font-quest text-l rounded hover:bg-[#FEFBEA] hover:text-zinc-400 hover:outline-zinc-400 transition-all duration-150 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
