import { getRolesDAL } from "../DAL/roleDAL";

/**
 * Handles the business logic for fetching roles.
 */
export async function getRolesBLL() {
  return await getRolesDAL();
}
