"use client";
import { createContext, useState, ReactNode, FC } from "react";
import { useRouter } from "next/navigation";
import { isFormInvalid } from "./utils/validate";
import { login } from "./utils/login";

interface LoginContextProps {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSignIn: () => Promise<boolean>;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const LoginProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async (): Promise<boolean> => {
    try {
      const id = await isFormInvalid(username, password);

      if (!id) {
        return false;
      }
      const token = await login(id);
      if (!token) {
        return false;
      }

      localStorage.setItem("jwtToken", token);
      console.log(" Succesfully signed in ");
      router.push("/");
      return true;
    } catch (err: any) {
      console.log(
        "Error while handling sign in ( occurred in loginContext / loginForm",
        err
      );
      return false;
    }
  };

  const value: LoginContextProps = {
    username,
    setUsername,
    password,
    setPassword,
    handleSignIn,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;
