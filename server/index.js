import express from "express";
import cors from "cors";
import gamesRouter from "./api/games.js";
import authRouter from "./api/auth.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware: change below when launching in production
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

// Routes: DO NOT CHANGE
app.use(express.json());
app.use("/api/auth", authRouter);

// GAMES routes
app.use("/api/games", gamesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
