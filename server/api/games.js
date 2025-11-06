import express from "express";
import pkg from "../generated/prisma/index.js";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router();

// GET all games
router.get("/", async (req, res) => {
  try {
    const games = await prisma.arcadiaGame.findMany();
    res.json(games);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch games. Please contact admin!" });
  }
});

// ADD new game

// UPDATE game

// DELETE game


export default router;
