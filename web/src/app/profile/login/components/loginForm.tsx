import React, { ReactElement, useContext} from "react";
import LoginContext from "../loginContext"

export default function LoginForm(): ReactElement {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error(
      "props are null -- LoginContext -- ./src/app/profile/login/loginContext"
    );
  }else{
    console.log("PROPS ARE LOADED -- LOGIN PAGE")
  }

  const {
   username,
   setUsername,
   password, 
   setPassword,
   handleSignIn
  } = context;

  
  return (
    <main className="flex px-[20px] flex-col items-center justify-center w-full md:w-[850px] mx-auto h-full">
      <div className="w-full md:w-4/6 lg:w-4/6 pb-8 pt-16 px-10 border border-slate-600 rounded-[5px] shadow-xl bg-[#fcf9e8] z-20">
        <form
          className="flex justify-start flex-col items-center max-w-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn() // Prevent default form submission
          }}
        >
          <label className="text-xl sm:text-xl pb-2 block font-quest">
            username
          </label>
          <div className="w-full relative pb-16">
            <input
              className={`focus:outline-black focus:outline-1.5 focus:outline rounded w-full pl-1 pb-0.5 pt-1 font-quest`}
              type="text"
              placeholder="name..."
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </div>
          <label className="text-xl sm:text-xl pb-2 block font-quest">
            password
          </label>
          <div className="w-full relative pb-16">
            <input
              className={`focus:outline-black focus:outline-1.5 focus:outline rounded w-full pl-1 pb-0.5 pt-1 font-quest`}
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button
            type="submit"
            className="w-3/6 mt-10 p-2 bg-[#e79ca9] text-white border-solid border-[1px] outline outline-1 font-quest text-l rounded hover:bg-[#FEFBEA] hover:text-zinc-400 hover:outline-zinc-400 transition-all duration-150 ease-in-out"
          >
            login
          </button>
        </form>
      </div>
    </main>
  );
}
