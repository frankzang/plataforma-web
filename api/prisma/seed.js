import { prisma } from './bd/prisma.js';
import {
  startOfMonth,
  sub,
  add,
  isSunday,
  isSaturday,
  getDay,
  isAfter,
  startOfToday,
  startOfQuarter,
} from 'date-fns';

function generateRandomString() {
  var possibleCharacters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    result += possibleCharacters[randomIndex];
  }
  return result;
}

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

  const habilitacao = await prisma.habilitacao.create({
    data: { name: 'Graduação' },
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

  const aluno = await prisma.aluno.create({
    data: {
      nome: 'izael gomes',
      cpf: '9980989080909',
      email: 'fulano@gmail.com',
      endereco: 'rua ola gomes',
      idHabilitacao: 1,
      idStatus: 1,
      password: '123456',
      ra: generateRandomString(),
      telefone: '8887778999',
      turmaId: 2,
    },
  });

  const disciplinas = await Promise.all(
    [
      {
        name: 'Projeto Integrado',
        idHabilitacao: habilitacao.id,
      },
      {
        name: 'Banco de Dados',
        idHabilitacao: habilitacao.id,
      },
      {
        name: 'Segurança da Informação',
        idHabilitacao: habilitacao.id,
      },
    ].map((disciplina) => prisma.disciplina.create({ data: disciplina }))
  );

  await prisma.alunoDisciplina.create({
    data: {
      idAluno: aluno.id,
      idDisciplina: disciplinas[0].id,
    },
  });

  await prisma.eventos.createMany({
    data: [
      {
        nome: 'Congresso de sistemas de informação',
        dataInicial: new Date(),
        dataFinal: new Date('2024-05-10'),
        description:
          'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
        statusId: 4,
        coverImg: 'https://placehold.co/300x250',
      },
      {
        nome: 'Congresso de sistemas de informação',
        dataInicial: new Date(),
        dataFinal: new Date('2024-05-10'),
        description:
          'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
        statusId: 4,
        coverImg: 'https://placehold.co/300x250',
      },
      {
        nome: 'Congresso de sistemas de informação',
        dataInicial: new Date(),
        dataFinal: new Date('2024-05-10'),
        description:
          'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
        statusId: 4,
        coverImg: 'https://placehold.co/300x250',
      },
      {
        nome: 'Congresso de sistemas de informação',
        dataInicial: new Date(),
        dataFinal: new Date('2024-05-10'),
        description:
          'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
        statusId: 4,
        coverImg: 'https://placehold.co/300x250',
      },
      {
        nome: 'Congresso de sistemas de informação',
        dataInicial: new Date(),
        dataFinal: new Date('2024-05-10'),
        description:
          'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
        statusId: 4,
        coverImg: 'https://placehold.co/300x250',
      },
      {
        nome: 'Congresso de sistemas de informação',
        dataInicial: new Date(),
        dataFinal: new Date('2024-05-10'),
        description:
          'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
        statusId: 4,
        coverImg: 'https://placehold.co/300x250',
      },
      {
        nome: 'Congresso de sistemas de informação',
        dataInicial: new Date(),
        dataFinal: new Date('2024-05-10'),
        description:
          'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
        statusId: 4,
        coverImg: 'https://placehold.co/300x250',
      },
      {
        nome: 'Congresso de sistemas de informação',
        dataInicial: new Date(),
        dataFinal: new Date('2024-05-10'),
        description:
          'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
        statusId: 4,
        coverImg: 'https://placehold.co/300x250',
      },
    ],
  });

  await prisma.nota.createMany({
    data: [
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[0].id,
        tipo: 'PROVA1',
      },
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[0].id,
        tipo: 'PROVA2',
      },
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[0].id,
        tipo: 'TRABALHO1',
      },
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[1].id,
        tipo: 'PROVA1',
      },
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[1].id,
        tipo: 'PROVA2',
      },
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[1].id,
        tipo: 'TRABALHO1',
      },
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[2].id,
        tipo: 'PROVA1',
      },
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[2].id,
        tipo: 'PROVA2',
      },
      {
        nota: 10,
        idAluno: aluno.id,
        idDisciplina: disciplinas[2].id,
        tipo: 'TRABALHO1',
      },
    ],
  });
  const pastMonth = sub(startOfMonth(new Date()), {
    months: 6,
  });
  const dates = [...Array(30 * 6).keys()].map((_, index) => {
    const d = add(pastMonth, { days: index });
    if (isSaturday(d) || isSunday(d) || isAfter(d, startOfToday)) return null;

    return add(pastMonth, { days: index });
  });

  await Promise.all(
    dates.filter(Boolean).map(async (date) => {
      const randomDay = Math.floor(Math.random() * 8);

      return prisma.frequenciaDisciplina.create({
        data: {
          idAluno: aluno.id,
          idDisciplina: disciplinas[0].id,
          data: date,
          presenca: getDay(date) !== randomDay,
        },
      });
    })
  );
}

main();
