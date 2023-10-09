/*
  Warnings:

  - You are about to drop the column `created_at` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `id_habilitacao` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `turma_id` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `id_habilitacao` on the `disciplina` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `livrosalugueis` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `status` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idHabilitacao` to the `aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turmaId` to the `aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idHabilitacao` to the `disciplina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `livrosalugueis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `status` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "aluno" DROP CONSTRAINT "aluno_id_habilitacao_fkey";

-- DropForeignKey
ALTER TABLE "disciplina" DROP CONSTRAINT "disciplina_id_habilitacao_fkey";

-- AlterTable
ALTER TABLE "aluno" DROP COLUMN "created_at",
DROP COLUMN "id_habilitacao",
DROP COLUMN "turma_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "idHabilitacao" INTEGER NOT NULL,
ADD COLUMN     "turmaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "disciplina" DROP COLUMN "id_habilitacao",
ADD COLUMN     "idHabilitacao" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "eventos" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "livrosalugueis" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "status" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_idHabilitacao_fkey" FOREIGN KEY ("idHabilitacao") REFERENCES "habilitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina" ADD CONSTRAINT "disciplina_idHabilitacao_fkey" FOREIGN KEY ("idHabilitacao") REFERENCES "habilitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
