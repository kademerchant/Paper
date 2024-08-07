import validator from "validator";
import api from "../../../../../axios/axios";

//all functions return TRUE if the parameter is considered INVALID -- this is for readibility in the registerForm.tsx

//all input except the password must not contain characters that could be used for an injection attack
//(this is because password is hashed before going to server)

export const isNameInvalid = (name: string): boolean => {
  const evilCharacters = /[!#$^&*(%;:),<>?":{}=+|'@~`_-]/;

  return evilCharacters.test(name);
};

export const isUsernameInvalid = (username: string): boolean => {
  const evilCharacters = /[!#$^&*(;\),%<>?":{}=+|'@~`]/;

  return evilCharacters.test(username) || username.length > 32;
};

export const isEmailInvalid = (email: string): boolean => {
  return !validator.isEmail(email);
};

//password must contain at least one special character as well as at least one capital
export const isPasswordInvalid = (password: string): boolean => {
  const specialCharacters = /[!#$^&*(),<>?":{}=+|'@;%~`_-]/;
  const capitalLetters = /[A-Z]/;

  return (
    !specialCharacters.test(password) ||
    password.length < 8 ||
    !capitalLetters.test(password)
  );
};

export const isFormInvalid = (
  name: string,
  username: string,
  email: string,
  password: string
): boolean => {
  return (
    isNameInvalid(name) ||
    isUsernameInvalid(username) ||
    isEmailInvalid(email) ||
    isPasswordInvalid(password)
  );
};

export const userAlreadyExists = async (
  username: string,
  email: string
): Promise<boolean> => {
  try {
    const response = await api.post("/api/v1/auth/register/exists", {
      username,
      email,
    });
    console.log("Frontend response:", response.data);
    return response.data.exists;
  } catch (err) {
    console.log("Error checking if user exists.");
    return false;
  }
};
