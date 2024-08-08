import api from "../../../../../axios/axios";

//function will return true if the username doesnt exist in the db or the password doesnt match the given username

export const login = async (id: string): Promise<string | null> => {
  try {
    const response = await api.post("api/v1/auth/login", {
      id,
    });
    if (!response) {
      return null;
    }
    return response.data.token;
  } catch (err: any) {
    console.log("Error while logging in ");
    return null;
  }
};
