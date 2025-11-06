import pkg from "../generated/prisma/index.js";
import bcrypt from "bcrypt";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const main = async () => {
  const hashedPassword = await bcrypt.hash("MyPassword123", 10);

  const user = await prisma.user.create({
    data: {
      username: "admin",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("🧙‍♂️ User Created:", user.username);
};

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
