import express, { NextFunction, Request, Response } from "express";
import leaderboardRoutes from "./src/routes/leaderboardRoutes";
import authRoutes from "./src/routes/authRoutes";
import userRoutes from "./src/routes/userRoutes";
import cors from "cors";
import dotenv from "dotenv";
import MiddlewareServices from "./src/middleware/middleware";

dotenv.config();

const app = express();
const PORT = 8234;

app.use(
  cors({
    origin: "*",
  }),
);

// Middleware to parse JSON request bodies into JavaScript objects
app.use(express.json());
app.use(express.static("public"));
// Middleware to verify the preflight request for cors
app.use((req: Request, res: Response, next: NextFunction) => {
  MiddlewareServices.verifyPreFlightRequest(req, res, next);
});

// Test API
app.get("/test", (req, res) => {
  res.send("Hello world");
});

app.use("/api", leaderboardRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Now listening on port ${PORT}`);
});
