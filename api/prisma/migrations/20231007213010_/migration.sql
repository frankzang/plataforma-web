/*
  Warnings:

  - A unique constraint covering the columns `[ra]` on the table `aluno` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ra` to the `aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "aluno" ADD COLUMN     "ra" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "aluno_ra_key" ON "aluno"("ra");
