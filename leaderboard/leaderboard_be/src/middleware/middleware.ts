import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { readFileSync } from "fs";

dotenv.config();

function verifyPreFlightRequest(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
}
const MiddlewareServices = {
  verifyPreFlightRequest,
};

export default MiddlewareServices;
