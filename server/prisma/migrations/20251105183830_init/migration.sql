-- CreateTable
CREATE TABLE "ArcadiaGame" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "ArcadiaGame_pkey" PRIMARY KEY ("id")
);
