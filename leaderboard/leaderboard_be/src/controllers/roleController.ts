import { Request, Response } from "express";
import { getRolesBLL } from "../BLL/roleBLL";

/**
 * Handles fetching of roles.
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns the roles data.
 */
export async function getRoles(req: Request, res: Response) {
  try {
    const roles = await getRolesBLL();
    res.status(200).json(roles);
  } catch (error) {
    console.error("Error fetching roles", error as Error);
    res.status(500).json({ error: (error as Error).message });
  }
}
