import { Request, Response } from "express";
import { SignInFormValues, SignUpFormValues } from "../types/types";
import { signUpBLL } from "../BLL/authBLL";
import { signInBLL } from "../BLL/authBLL";

/**
 * Handles user sign-up.
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns the non-sensitive user information along with a JWT
 */
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

/**
 * Handles user sign-in.
 *
 * If an error occurs during the process, it returns a 401 status code with the error message.
 * Otherwise, it returns the non-sensitive user information along with a JWT
 */
export async function signIn(req: Request, res: Response) {
  try {
    const { email, password } = req.body as SignInFormValues;
    const { user, token } = await signInBLL({
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

    res.status(200).json({ user: safeUser, token });
  } catch (error) {
    console.error("Error signing in user", (error as Error).message);
    res.status(401).json({ error: (error as Error).message });
  }
}
