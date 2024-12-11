import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: number;
    roleName: string;
  };
}

export const verifyToken: RequestHandler = (req, res, next) => {
  const authReq = req as AuthenticatedRequest;

  const authHeader = authReq.headers.authorization;

  // Check if the authorization header is present
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(401)
      .json({ message: "Authorization header missing or malformed" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: number;
      roleName: string;
      iat: number;
      exp: number;
    };

    // Attach user info to the request object
    authReq.user = {
      userId: decoded.userId,
      roleName: decoded.roleName,
    };

    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }
};
