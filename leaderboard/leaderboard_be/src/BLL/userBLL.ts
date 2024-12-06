import { deleteUserDAL, getUsersDAL } from "../DAL/userDAL";

/**
 * Handles the business logic for fetching users.
 */
export async function getUsersBLL() {
  return await getUsersDAL();
}

/**
 * Handles the business logic for deleting users.
 */
export async function deleteUserBLL(userId: number) {
  return await deleteUserDAL(userId);
}
