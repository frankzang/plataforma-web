import { prisma } from './bd/prisma.js';

async function main() {
  await prisma.status.createMany({
    data: [
      { name: 'Matriculado', createdAt: new Date() },
      { name: 'Assinar Contrado', createdAt: new Date() },
      { name: 'Trancado', createdAt: new Date() },
      { name: 'disponivel', createdAt: new Date() },
      { name: 'indisponivel', createdAt: new Date() },
    ],
  });

  await prisma.habilitacao.createMany({
    data: [{ name: 'Graduação' }, { name: 'Especialização' }],
  });

  await prisma.curso.createMany({
    data: [
      {
        name: 'Sistemas de Informação',
        turno: 'noite',
        price: 2000,
        idHabilitacao: 1,
      },
      { name: 'Ads', turno: 'noite', price: 2000, idHabilitacao: 1 },
    ],
  });

  await prisma.livro.create({
    data: {
      nome: 'avatar',
      autor: 'izael',
      editora: 'Rh',
      quantidade: '4',
      disponivel: true,
    },
  });

  await prisma.aluno.createMany({
    data: [
      {
        ra: 'ABC123',
        nome: 'izael gomes',
        cpf: '9980989080909',
        email: 'fulano@gmail.com',
        endereco: 'rua ola gomes',
        idHabilitacao: 1,
        idStatus: 1,
        password: '123456',
        ra: '1222321',
        telefone: '8887778999',
        turmaId: 1,
      },
    ],
  });

  await prisma.bolsas.createMany({
    data: [{ nome: 'Graduação', valor: 10, idAluno: 1, idCurso: 1 }],
  });
}

main();
