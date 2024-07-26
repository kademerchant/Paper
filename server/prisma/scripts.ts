import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Kade",
      email: "kademerchant@gmail.com",
      password: "TESTPASSWORD",
      role: "ADMIN",
    },
  });
  console.log(user);
}

main();
