-- DropForeignKey
ALTER TABLE "curso" DROP CONSTRAINT "curso_alunoId_fkey";

-- AlterTable
ALTER TABLE "curso" ALTER COLUMN "alunoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;
