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
        nome: 'izael gomes',
        cpf: '9980989080909',
        email: 'fulano@gmail.com',
        endereco: 'rua ola gomes',
        idHabilitacao: 1,
        idStatus: 1,
        password: '123456',
        ra: '12252663218',
        telefone: '8887778999',
        turmaId:2
        
      },
    ],
  });

  await prisma.bolsas.createMany({
    data: [{ nome: 'Graduação', valor: 10, idAluno: 1, idCurso: 1 }],
  });

  await prisma.eventos.create({
    data:{
      nome:'Congresso de sistemas de informação', 
      dataInicial:new Date(),
      dataFinal: new Date('2024-05-10'), 
      description:'O Congresso de Sistemas de Informação é um evento anual que reúne acadêmicos, profissionais da área de tecnologia e estudantes do curso de Sistemas de Informação em um ambiente de aprendizado, colaboração e inovação. Este congresso tem como objetivo principal promover a troca de conhecimento e experiências, bem como discutir as tendências e desafios em constante evolução no campo da tecnologia da informação. Data e Local: O evento acontecerá nos dias 15 a 17 de novembro no Centro de Convenções da cidade de [Nome da Cidade], proporcionando um ambiente adequado para acomodar os participantes e garantir a realização de palestras, workshops e atividades interativas.',
      statusId:4, 
      coverImg:'https://www.undb.edu.br/hubfs/sistema%20de%20informa%C3%A7%C3%A3o%20undb.jpg'
    }
  })
}

main();
