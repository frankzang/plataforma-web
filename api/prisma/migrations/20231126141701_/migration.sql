-- CreateTable
CREATE TABLE "aluno" (
    "id" SERIAL NOT NULL,
    "ra" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "turmaId" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idHabilitacao" INTEGER NOT NULL,
    "idStatus" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habilitacao" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "habilitacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "periodoacademico" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "periodoacademico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disciplina" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "idHabilitacao" INTEGER NOT NULL,

    CONSTRAINT "disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunodisciplina" (
    "id" SERIAL NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "idDisciplina" INTEGER NOT NULL,

    CONSTRAINT "alunodisciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curso" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alunoId" INTEGER,
    "turno" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "idHabilitacao" INTEGER NOT NULL,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matricula" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "idDisciplina" INTEGER NOT NULL,
    "idLetivo" INTEGER NOT NULL,

    CONSTRAINT "matricula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamento" (
    "id" SERIAL NOT NULL,
    "pagamentoData" TIMESTAMP(3) NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "metodoPagamento" TEXT NOT NULL,

    CONSTRAINT "pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolsas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "idCurso" INTEGER NOT NULL,

    CONSTRAINT "bolsas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverImg" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "dataInicial" TIMESTAMP(3) NOT NULL,
    "dataFinal" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventoinscricoes" (
    "id" SERIAL NOT NULL,
    "idEvent" INTEGER NOT NULL,
    "ra" TEXT NOT NULL,

    CONSTRAINT "eventoinscricoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "livros" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,
    "disponivel" BOOLEAN NOT NULL,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "livrosalugueis" (
    "id" SERIAL NOT NULL,
    "idLivro" INTEGER NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "devolvido" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "livrosalugueis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "idDisciplina" INTEGER NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "frequenciadisciplina" (
    "id" SERIAL NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "idDisciplina" INTEGER NOT NULL,
    "presenca" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "justificativa" TEXT,

    CONSTRAINT "frequenciadisciplina_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_ra_key" ON "aluno"("ra");

-- CreateIndex
CREATE UNIQUE INDEX "periodoacademico_name_key" ON "periodoacademico"("name");

-- CreateIndex
CREATE UNIQUE INDEX "bolsas_idAluno_key" ON "bolsas"("idAluno");

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_idHabilitacao_fkey" FOREIGN KEY ("idHabilitacao") REFERENCES "habilitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_idStatus_fkey" FOREIGN KEY ("idStatus") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplina" ADD CONSTRAINT "disciplina_idHabilitacao_fkey" FOREIGN KEY ("idHabilitacao") REFERENCES "habilitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunodisciplina" ADD CONSTRAINT "alunodisciplina_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunodisciplina" ADD CONSTRAINT "alunodisciplina_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curso" ADD CONSTRAINT "curso_idHabilitacao_fkey" FOREIGN KEY ("idHabilitacao") REFERENCES "habilitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_idLetivo_fkey" FOREIGN KEY ("idLetivo") REFERENCES "periodoacademico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamento" ADD CONSTRAINT "pagamento_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bolsas" ADD CONSTRAINT "bolsas_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bolsas" ADD CONSTRAINT "bolsas_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventoinscricoes" ADD CONSTRAINT "eventoinscricoes_idEvent_fkey" FOREIGN KEY ("idEvent") REFERENCES "eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventoinscricoes" ADD CONSTRAINT "eventoinscricoes_ra_fkey" FOREIGN KEY ("ra") REFERENCES "aluno"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "livrosalugueis" ADD CONSTRAINT "livrosalugueis_idLivro_fkey" FOREIGN KEY ("idLivro") REFERENCES "livros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "livrosalugueis" ADD CONSTRAINT "livrosalugueis_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professor" ADD CONSTRAINT "professor_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "frequenciadisciplina" ADD CONSTRAINT "frequenciadisciplina_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "frequenciadisciplina" ADD CONSTRAINT "frequenciadisciplina_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
