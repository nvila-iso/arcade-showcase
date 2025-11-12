import express from "express";
import pkg from "../generated/prisma/index.js";
import verifyToken from "../middleware/verifyToken.js";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const router = express.Router();

// GET --> /api/games
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

// POST --> /api/games
router.post("/", verifyToken, async (req, res) => {
  try {
    const { name, genre, platform, img, url, alt, status } = req.body;

    // Required fields
    if (!name || !platform || !img) {
      return res
        .status(400)
        .json({ error: "Name, platform and image are required fields." });
    }

    const newGame = await prisma.arcadiaGame.create({
      data: {
        name,
        genre: genre || "Other",
        platform,
        img,
        alt: alt || name,
        url: url || "",
        status: status ?? true,
      },
    });

    res.status(201).json(newGame);
  } catch (error) {
    console.error("Error creating game:", error);
    res.status(500).json({ error: "Failed to create game." });
  }
});

// GET game by ID --> /api/games/:id

// PATCH (update) game --> /api/games/:id
router.patch("/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, genre, platform, img, alt, url, status } = req.body;

    const updatedGame = await prisma.arcadiaGame.update({
      where: { id: parseInt(id) },
      data: {
        name,
        genre: genre || "Other",
        platform,
        img,
        alt: alt || name,
        url: url || "",
        status: status ?? true,
      },
    });

    res.status(200).json(updatedGame);
  } catch (error) {
    console.error("Error updating game:", error);
    res.status(500).json({ error: "Failed to update game." });
  }
});

// DELETE --> /api/games/:id
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.arcadiaGame.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Game deleted successfully", deleted });
  } catch (error) {
    console.error("Error deleting game:", error);
    res.status(500).json({ error: "Failed to delete game." });
  }
});

export default router;
