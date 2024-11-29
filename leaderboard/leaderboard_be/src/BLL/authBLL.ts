import { SignUpFormValues } from "../types/types";
import bcrypt from "bcrypt";
import { signUpDAL } from "../DAL/authDAL";
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
      roleId: user.roleId,
      roleName: user.role.roleName,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" },
  );

  return { user, token };
}
