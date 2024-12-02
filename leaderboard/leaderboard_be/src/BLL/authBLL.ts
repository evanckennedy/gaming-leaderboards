import { SignInFormValues, SignUpFormValues } from "../types/types";
import bcrypt from "bcrypt";
import { signInDAL, signUpDAL } from "../DAL/authDAL";
import jwt from "jsonwebtoken";

export async function signUpBLL(data: SignUpFormValues) {
  const { firstName, lastName, email, password } = data;

  // Hash the password
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  // Create user in the database
  const user = await signUpDAL({ firstName, lastName, email, passwordHash });

  // Generate JWT
  const token = jwt.sign(
    {
      userId: user.id,
      roleName: user.role.roleName,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" },
  );

  return { user, token };
}

export async function signInBLL(data: SignInFormValues) {
  const { email, password } = data;

  // Get user from the database
  const user = await signInDAL(email);

  // Check if the user exists
  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Compare the submitted password with the stored password
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT
  const token = jwt.sign(
    {
      userId: user.id,
      roleName: user.role.roleName,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" },
  );

  return { user, token };
}
