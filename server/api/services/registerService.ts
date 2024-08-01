import validator from "validator";
import bcrypt from "bcrypt";
import prisma from "../../prisma/client";

export const registerUser = async (
  name: string,
  email: string,
  username: string,
  ciUsername: string,
  password: string,
  additionalFields: Record<string, string> = {} //modularity for adding new fields if i want to
) => {
  const evilCharacters = /[!#$^&*(),<>?":{}]/;

  if (!validator.isEmail(email)) {
    throw new Error("Invalid Email format");
  }

  // Validate all fields against evil characters
  const fieldsToValidate = { name, username, email, ...additionalFields };
  for (const [fieldName, fieldValue] of Object.entries(fieldsToValidate)) {
    if (evilCharacters.test(fieldValue)) {
      throw new Error(`Malicious input detected in ${fieldName}!!`);
    }
  }

  if (
    (await prisma.user.findUnique({ where: { username } })) !== null ||
    (await prisma.user.findUnique({ where: { email } })) !== null
  ) {
    throw new Error("Username / Email already exists");
  }

  return await prisma.user.create({
    data: {
      name: validator.escape(name),
      email: validator.escape(email.toLowerCase()),
      username: validator.escape(username),
      ciUsername: validator.escape(ciUsername),
      password: await bcrypt.hash(password, 10),
    },
  });
};

export const usernameOrEmailExists = async (
  username: string,
  email: string
): Promise<boolean> => {
  try {
    const ciUsername = username.toLowerCase();
    const usernameExists = await prisma.user.findUnique({
      where: { ciUsername },
    });
    const emailExists = await prisma.user.findUnique({ where: { email } });
    return !!(usernameExists || emailExists);
  } catch (err) {
    console.log(`Error while finding existing username/email in db: ${err}`);
    return false;
  }
};
