import express from "express";
import leaderboardRoutes from "./src/routes/leaderboardRoutes";
import authRoutes from "./src/routes/authRoutes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8234;

// Middleware to parse JSON request bodies into JavaScript objects
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:8234",
      "http://localhost:5173",
      "http://localhost:8080",
      "http://192.168.0.218:8234/",
      "http://192.168.0.218:5173/",
    ],
  }),
);

// Test API
app.get("/test", (req, res) => {
  res.send("Hello world");
});

app.use("/api", leaderboardRoutes);
app.use("/api", authRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Now listening on port ${PORT}`);
});
