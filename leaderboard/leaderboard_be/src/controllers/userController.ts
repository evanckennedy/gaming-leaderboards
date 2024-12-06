import { Request, Response } from "express";
import { deleteUserBLL, getUsersBLL, resetPasswordBLL } from "../BLL/userBLL";

/**
 * Handles fetching of users.
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns the users data.
 */
export async function getUsers(req: Request, res: Response) {
  try {
    const users = await getUsersBLL();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users", error as Error);
    res.status(500).json({ error: (error as Error).message });
  }
}

/**
 * Handles deleting a user.
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns a success message.
 */
export async function deleteUser(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.id, 10); // Accessing the id parameter
    await deleteUserBLL(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user", error as Error);
    res.status(500).json({ error: (error as Error).message });
  }
}

/**
 * Handles resetting a user's password.
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns a success message.
 */
export async function resetPassword(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.id, 10); // Accessing the id parameter
    const { newPassword } = req.body;
    if (!newPassword) {
      res.status(400).json({ error: "New password is required" });
      return;
    }
    await resetPasswordBLL(userId, newPassword);
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password", error as Error);
    res.status(500).json({ error: (error as Error).message });
  }
}
