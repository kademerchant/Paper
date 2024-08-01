import api from "../../../../../axios/axios";
import { isFormInvalid } from "./validate";
import { KeyboardEvent } from "react";

export interface HandleSubmitParams {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const handleSubmit = (
  e: any,
  { name, username, email, password }: HandleSubmitParams
) => {
  e.preventDefault();
  const formInvalid = isFormInvalid(name, username, email, password);
  if (formInvalid) {
    return;
  }

  try {
    api.post("/api/v1/auth/register", {
      name,
      username,
      email,
      password,
    });
  } catch (err: any) {
    console.log({ err: err.message });
  }
};

export const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
  if (e.key === " " || e.key === "  ") {
    e.preventDefault();
  }
};
