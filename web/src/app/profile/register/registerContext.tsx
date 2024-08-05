"use client";
import {
  createContext,
  useState,
  ReactNode,
  FC,
  FormEvent,
  KeyboardEvent,
} from "react";
import {
  isNameInvalid,
  isUsernameInvalid,
  isEmailInvalid,
  isPasswordInvalid,
  isFormInvalid,
  userAlreadyExists,
} from "./utils/validate";
import { handleKeyDown as handleKeyDownUtil } from "./utils/formHandlers"; // Renamed to avoid confusion
import api from "../../../../axios/axios";
import { useRouter } from "next/navigation";

interface RegisterContextProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  userExists: boolean;
  setUserExists: (userExists: boolean) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  isNameInvalid: (name: string) => boolean;
  isUsernameInvalid: (username: string) => boolean;
  isEmailInvalid: (email: string) => boolean;
  isPasswordInvalid: (password: string) => boolean;
}

const RegisterContext = createContext<RegisterContextProps | undefined>(
  undefined
);

export const RegisterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userExists, setUserExists] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserExists(false);

    const formInvalid = isFormInvalid(name, username, email, password);
    if (formInvalid) {
        return;
    }

    try {
       
        const userExists = await userAlreadyExists(username, email);
        if (userExists) {
            setUserExists(true);
            return; 
        }

        await api.post("/api/v1/auth/register", {
            name,
            username,
            email,
            password,
        });

        router.push("/profile/login");
        setName("");
        setEmail("");
        setPassword("");
        setUsername("");
    } catch (err: any) {
        console.error("Registration error:", err.message);
    }
};


  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    handleKeyDownUtil(e);
  };

  const value: RegisterContextProps = {
    name,
    setName,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    userExists,
    setUserExists,
    handleSubmit,
    handleKeyDown,
    isNameInvalid,
    isUsernameInvalid,
    isEmailInvalid,
    isPasswordInvalid,
  };

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;
