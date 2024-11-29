import { Request, Response } from "express";
import { SignUpFormValues } from "../types/types";
import { signUpBLL } from "../BLL/authBLL";

export async function signUp(req: Request, res: Response) {
  try {
    const { firstName, lastName, email, password } =
      req.body as SignUpFormValues;
    const { user, token } = await signUpBLL({
      firstName,
      lastName,
      email,
      password,
    });

    // Exclude sensitive information
    const {
      passwordHash,
      accessFailedCount,
      lastLogin,
      lockedOut,
      ...safeUser
    } = user;

    res.status(201).json({ user: safeUser, token });
  } catch (error) {
    console.error("Error signing up user", (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
}
