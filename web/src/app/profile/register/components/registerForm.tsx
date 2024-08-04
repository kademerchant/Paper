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
    <main className="flex flex-col items-center justify-center w-4/5 sm:w-6/7 mx-auto h-full ">
      <div className="sm:w-full md:w-4/6 lg:w-4/6 pb-20 pt-10 px-10 border border-black rounded shadow-lg bg-[#FEFBEA] z-20">
        <form
          className="flex justify-start flex-col items-center max-w-full"
          onSubmit={handleSubmit}
        >
          <label
            className="text-2xl sm:text-xl mt-4 pb-2"
            aria-label="Enter your name"
          >
            Name
          </label>
          {isNameInvalid(name) && (
            <div className="font-quest text-[0.7rem]lg:text-base text-red-400">
              you must only include letters and whitespace (spacebar...) in your name 
            </div>
          )}
          <input
            className={`focus:outline-black focus:outline-1.5 focus:outline ${
              isNameInvalid(name)
                ? "focus:outline-red-400"
                : "focus:outline-black"
            }  rounded w-full pl-1 pb-0.5 pt-1 font-quest`}
            type="text"
            placeholder=" name..."
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label
            className="text-xl font-quest mt-4 pb-2"
            aria-label="Enter your email"
          >
            Email
          </label>
          {email.length > 5 && isEmailInvalid(email) && (
            <div className="font-quest text-[0.7rem] lg:text-base text-red-400">
              must provide a valid email ( @gmail.com, @hotmail.com @yahoo.com
              ...)
            </div>
          )}
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
          <label
            className="text-xl font-quest mt-4 pb-2"
            aria-label="Choose your username"
          >
            Username
          </label>
          {isUsernameInvalid(username) && (
            <div className="font-quest text-[0.7rem] lg:text-base text-red-400">
              username must only contain letters, numbers and ' _ ', ' - '{" "}
              <br /> and be between 3 and 32 characters long.
            </div>
          )}
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
          <label
            className="text-xl font-quest mt-4 pb-2"
            aria-label="Choose your password"
          >
            Password
          </label>
          {password.length > 0 && isPasswordInvalid(password) && (
            <div className="font-quest text-[0.7rem] lg:text-base text-red-400">
              password must include at least one capital letter, special
              character e.g "!@#", and be at least 8 characters long
            </div>
          )}
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
          {userExists && (
            <div className="font-quest text-[0.7rem] lg:text-base text-red-400">
              username or email is already associated with an account
            </div>
          )}
          <button
            type="submit"
            className="w-3/5 mt-20 p-2 bg-none outline outline-1 outline-black font-quest text-l rounded hover:bg-[#FEFBEA] hover:text-zinc-400 hover:outline-zinc-400 transition-all duration-150 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
