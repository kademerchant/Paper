import api from "../../../../../axios/axios";

//function will return true if the username doesnt exist in the db or the password doesnt match the given username

export const isFormInvalid = async (
  username: string,
  password: string
): Promise<string | null> => {
  try {
    const response = await api.post("api/v1/auth/validate-credentials", {
      username,
      password,
    });
    if (!response) {
      return null;
    }
    return response.data.id;
  
} catch (err: any) {
    console.log("Credentials invalid")
    return null;
  }
};
