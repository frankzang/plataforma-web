-- CreateTable
CREATE TABLE "frequenciadisciplina" (
    "id" SERIAL NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "idDisciplina" INTEGER NOT NULL,
    "presenca" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "frequenciadisciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "frequenciadisciplina" ADD CONSTRAINT "frequenciadisciplina_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "frequenciadisciplina" ADD CONSTRAINT "frequenciadisciplina_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
