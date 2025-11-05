import pkg from "../generated/prisma/index.js";
import arcadeGames from "../../src/data/arcade_games.js";
import pinballGames from "../../src/data/pinball_games.js";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const main = async () => {
  const allGames = [...arcadeGames, ...pinballGames];
  const cleaned = allGames.map((game) => ({
    name: game.name,
    genre: game.genre || "Other",
    platform: game.img.includes("/arcade/") ? "Arcade" : "Pinball",
    img: game.img,
    alt: game.alt,
    url: game.url,
    status: game.status,
  }));

  for (const game of cleaned) {
    await prisma.arcadiaGame.create({ data: game });
  }

  console.log(`👾 Seeded ${cleaned.length} games!`);
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });