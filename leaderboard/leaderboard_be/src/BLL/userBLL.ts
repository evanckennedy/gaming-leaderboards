import {
  deleteUserDAL,
  getUsersDAL,
  resetPasswordDAL,
  updateUserRoleDAL,
} from "../DAL/userDAL";
import bcrypt from "bcrypt";

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

/**
 * Handles the business logic for resetting passwords
 */
export async function resetPasswordBLL(userId: number, newPassword: string) {
  // Hash the new password before saving it
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(newPassword, saltRounds);

  await resetPasswordDAL(userId, passwordHash);
}

/**
 * Handles the business logic for updating role
 */
export async function updateUserRoleBLL(userId: number, newRoleId: number) {
  await updateUserRoleDAL(userId, newRoleId);
}
