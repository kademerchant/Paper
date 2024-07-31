import validator from "validator";
import bcrypt from "bcrypt";
import prisma from "../../prisma/client";

export const registerUser = async (
  name: string,
  email: string,
  username: string,
  password: string,
  additionalFields: Record<string, string> = {} // Accept additional fields for validation
) => {
  // Define characters to disallow
  const evilCharacters = /[!#$^&*(),<>?":{}]/;

  // Validate email format
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

  // Check for existing username or email
  if (
    (await prisma.user.findUnique({ where: { username } })) !== null ||
    (await prisma.user.findUnique({ where: { email } })) !== null
  ) {
    throw new Error("Username / Email already exists");
  }

  // Create new user
  return await prisma.user.create({
    data: {
      name: validator.escape(name),
      email: validator.escape(email.toLowerCase()),
      username: validator.escape(username),
      password: await bcrypt.hash(password, 10),
    },
  });
};
