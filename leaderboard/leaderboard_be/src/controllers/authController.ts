import { Request, Response } from "express";
import { SignInFormValues, SignUpFormValues } from "../types/types";
import { signUpBLL, signInBLL, resetPasswordBLL } from "../BLL/authBLL";

/**
 * Handles user sign-up.
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns a JWT.
 */
export async function signUp(req: Request, res: Response) {
  try {
    const { firstName, lastName, email, password } =
      req.body as SignUpFormValues;
    const { token } = await signUpBLL({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error("Error signing up user", (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
}

/**
 * Handles user sign-in.
 *
 * If an error occurs during the process, it returns a 401 status code with the error message.
 * Otherwise, it returns a JWT.
 */
export async function signIn(req: Request, res: Response) {
  try {
    const { email, password } = req.body as SignInFormValues;
    const { token } = await signInBLL({
      email,
      password,
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error signing in user", (error as Error).message);
    res.status(401).json({ error: (error as Error).message });
  }
}

/**
 * Handles user password reset.
 *
 * Expects `email` and `newPassword` in the request body.
 * Returns a success message or an error.
 */
export async function resetPassword(req: Request, res: Response) {
  try {
    const { email, newPassword } = req.body;

    await resetPasswordBLL(email, newPassword);

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error resetting password", (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
}
