-- CreateEnum
CREATE TYPE "TipoNota" AS ENUM ('PROVA1', 'PROVA2', 'TRABALHO1', 'TRABALHO2', 'TRABALHO3', 'TRABALHO4', 'PROVA3');

-- CreateTable
CREATE TABLE "alunonota" (
    "id" SERIAL NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "idDisciplina" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,

    CONSTRAINT "alunonota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nota" (
    "id" SERIAL NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "idDisciplina" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,
    "tipo" "TipoNota" NOT NULL,

    CONSTRAINT "nota_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "alunonota" ADD CONSTRAINT "alunonota_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunonota" ADD CONSTRAINT "alunonota_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nota" ADD CONSTRAINT "nota_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nota" ADD CONSTRAINT "nota_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
