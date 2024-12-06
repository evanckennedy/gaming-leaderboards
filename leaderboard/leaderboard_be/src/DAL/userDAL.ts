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
