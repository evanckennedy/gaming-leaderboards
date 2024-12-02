import { SignUpDALValues } from "../types/types";
import prisma from "./prismaClient";

/**
 * Creates a new user in the database.
 *
 * @param data - The user sign-up data.
 * @returns A promise that resolves with the created user.
 * @throws An error if the default role is not found or if the email is already in use.
 */
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

/**
 * Retrieves a user from the database by email.
 *
 * @param email - The email of the user to retrieve.
 * @returns- A promise that resolves with the retrieved user.
 * @throws An error if the user cannot be retrieved.
 */
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
