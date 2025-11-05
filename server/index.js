import express from "express";
import cors from "cors";
import pkg from "./generated/prisma/index.js";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 4000;


// change below when launching in production
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);


// All Games route
app.get("/api/games", async (req, res) => {
  try {
    const games = await prisma.arcadiaGame.findMany();
    res.json(games);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch games. Please contact admin." });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
