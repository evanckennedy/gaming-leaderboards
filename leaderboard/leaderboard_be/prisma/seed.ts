import prisma from "../src/DAL/prismaClient";
import bcrypt from "bcrypt";

async function main() {
  const roles = [
    { roleName: "Root" },
    { roleName: "Create" },
    { roleName: "Viewer" },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { roleName: role.roleName },
      update: {},
      create: role,
    });
  }

  console.log("Roles seeded successfully.");

  const rootEmail = "root@root.com";
  const rootPassword = "rootpassword";
  const hashedPassword = await bcrypt.hash(rootPassword, 10);

  const rootRole = await prisma.role.findUnique({
    where: { roleName: "Root" },
  });

  if (!rootRole) {
    throw new Error("Root role not found");
  }

  await prisma.user.upsert({
    where: { email: rootEmail },
    update: {},
    create: {
      firstName: "Root",
      lastName: "User",
      email: rootEmail,
      passwordHash: hashedPassword,
      roleId: rootRole.id,
    },
  });

  console.log("Root user seeded succesfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
