/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "reset_password_token" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "username" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "FriendshipRequest" (
    "id" SERIAL NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "reciever_id" INTEGER NOT NULL,

    CONSTRAINT "FriendshipRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "black_player_id" INTEGER NOT NULL,
    "white_player_id" INTEGER NOT NULL,
    "winner_id" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Move" (
    "id" SERIAL NOT NULL,
    "public_name" VARCHAR(255) NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "Move_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Friendship" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Friendship_AB_unique" ON "_Friendship"("A", "B");

-- CreateIndex
CREATE INDEX "_Friendship_B_index" ON "_Friendship"("B");

-- AddForeignKey
ALTER TABLE "FriendshipRequest" ADD CONSTRAINT "FriendshipRequest_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendshipRequest" ADD CONSTRAINT "FriendshipRequest_reciever_id_fkey" FOREIGN KEY ("reciever_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_black_player_id_fkey" FOREIGN KEY ("black_player_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_white_player_id_fkey" FOREIGN KEY ("white_player_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_winner_id_fkey" FOREIGN KEY ("winner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Move" ADD CONSTRAINT "Move_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Friendship" ADD CONSTRAINT "_Friendship_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Friendship" ADD CONSTRAINT "_Friendship_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
