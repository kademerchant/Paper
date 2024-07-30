"use client"

import { createContext, useState, useContext, ReactNode } from "react";

interface RegisterContextProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  hidden: string;
  setHidden: (hidden: string) => void;
  handleSubmit: (e: any) => void;
}

const RegisterContext = createContext<RegisterContextProps | null>(null);

export const RegisterProvider = ({
  children,
}: {
  children: ReactNode;
}): React.ReactElement => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidden, setHidden] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
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
    hidden,
    setHidden,
    handleSubmit,
  };

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext
