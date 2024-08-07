"use client";
import { createContext, useState, ReactNode, FC } from "react";
import { useSession, signIn } from "next-auth/react";
import api from "../../../../axios/axios";
import { useRouter } from "next/navigation";
import { isFormInvalid } from "./utils/validation"

interface LoginContextProps {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSignIn: () => Promise<boolean>;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const LoginProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      console.log(
        "ERROR: encountered an error while trying to sign in -",
        result.error
      );
      return false;
    }
    console.log("Successfully signed in");
    return true;
  };

  const value: LoginContextProps = {
    username,
    setUsername,
    password,
    setPassword,
    handleSignIn,
    isFormInvalid, 
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;
