/*
  Warnings:

  - You are about to drop the `alunonota` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "alunonota" DROP CONSTRAINT "alunonota_idAluno_fkey";

-- DropForeignKey
ALTER TABLE "alunonota" DROP CONSTRAINT "alunonota_idDisciplina_fkey";

-- DropTable
DROP TABLE "alunonota";
