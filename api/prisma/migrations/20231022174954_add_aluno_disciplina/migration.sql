-- CreateTable
CREATE TABLE "alunodisciplina" (
    "id" SERIAL NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "idDisciplina" INTEGER NOT NULL,

    CONSTRAINT "alunodisciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "alunodisciplina" ADD CONSTRAINT "alunodisciplina_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunodisciplina" ADD CONSTRAINT "alunodisciplina_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
