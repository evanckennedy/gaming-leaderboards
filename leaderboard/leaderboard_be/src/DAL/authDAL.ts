import { SignUpDALValues } from "../types/types";
import prisma from "./prismaClient";

export async function signUpDAL(data: SignUpDALValues) {
  const { firstName, lastName, email, passwordHash } = data;

  // Assign default role ID to viewer
  const role = await prisma.role.findUnique({
    where: {
      roleName: "Viewer",
    },
  });

  if (!role) {
    throw new Error("Default role not found");
  }

  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash,
        roleId: role.id,
      },
      include: {
        role: true,
      },
    });
    return user;
  } catch (error: any) {
    if (error.code === "P2002" && error.meta.target.includes("email")) {
      throw new Error("Email already in use");
    } else {
      throw error;
    }
  }
}

export async function signInDAL(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });
    return user;
  } catch (error) {
    throw error;
  }
}
