import prisma from "./prismaClient";

/**
 * Fetches all roles
 */
export async function getRolesDAL() {
  return await prisma.role.findMany();
}
