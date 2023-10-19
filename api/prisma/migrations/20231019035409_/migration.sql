/*
  Warnings:

  - You are about to drop the column `alunoId` on the `eventos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "eventos" DROP CONSTRAINT "eventos_alunoId_fkey";

-- AlterTable
ALTER TABLE "eventos" DROP COLUMN "alunoId";

-- CreateTable
CREATE TABLE "eventoinscricoes" (
    "id" SERIAL NOT NULL,
    "idEvent" INTEGER NOT NULL,
    "ra" TEXT NOT NULL,

    CONSTRAINT "eventoinscricoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "eventoinscricoes" ADD CONSTRAINT "eventoinscricoes_idEvent_fkey" FOREIGN KEY ("idEvent") REFERENCES "eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventoinscricoes" ADD CONSTRAINT "eventoinscricoes_ra_fkey" FOREIGN KEY ("ra") REFERENCES "aluno"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;
