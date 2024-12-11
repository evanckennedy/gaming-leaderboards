import { RequestHandler } from "express";
import { AuthenticatedRequest } from "./authMiddleware";

export function checkRole(allowedRoles: string[]): RequestHandler {
  return (req, res, next) => {
    const authReq = req as AuthenticatedRequest;

    const userRole = authReq.user?.roleName;

    if (!userRole || !allowedRoles.includes(userRole)) {
      res
        .status(403)
        .json({ message: "Access denied: insufficient permissions" });
      return;
    }

    next();
  };
}
