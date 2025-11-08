import express from "express";
import bcrypt from "bcrypt";
import pkg from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router();

// POST --> /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // check the credentials
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }

    // check if the username exists
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password." });
    }

    // check if the password aligns
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ error: "Invalid username or password." });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // everything works out
    res.json({
      message: "Login Successful!",
      token,
      user: { id: user.id, role: user.role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during login." });
  }
});

export default router;
