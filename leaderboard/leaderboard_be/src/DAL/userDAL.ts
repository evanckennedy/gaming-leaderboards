import prisma from "./prismaClient";

/**
 * Fetches all users
 */
export async function getUsersDAL() {
  return await prisma.user.findMany({
    include: {
      role: {
        select: {
          roleName: true,
        },
      },
    },
  });
}

/**
 * Deletes a user by ID
 */
export async function deleteUserDAL(userId: number) {
  return await prisma.user.delete({
    where: { id: userId },
  });
}

/**
 * Resets a user's password by ID
 */
export async function resetPasswordDAL(id: number, passwordHash: string) {
  await prisma.user.update({
    where: { id },
    data: { passwordHash },
  });
}

/**
 * Update a user's role by ID
 */
export async function updateUserRoleDAL(id: number, roleId: number) {
  await prisma.user.update({
    where: { id },
    data: { roleId },
  });
}
