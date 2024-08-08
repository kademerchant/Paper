import prisma from "../../prisma/client";
import bcrypt from "bcrypt";

export const validateCredentials = async (
  username: string,
  password: string
): Promise<string | null> => {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null;
  }
  return user.id;
}