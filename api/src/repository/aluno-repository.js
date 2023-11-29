import { prisma } from '../../prisma/bd/prisma.js';

export async function studentRepository(ra) {
  const student = await prisma.aluno.findUnique({
    where: {
      ra,
    },
  });

  return student;
}

export async function findStudentOnEvent(eventId) {
 const aluno = await prisma.aluno.findFirst({
    where:{
        eventos:{
            some:{
              idEvent:eventId
            }
        }
    }
})


return aluno
}

export async function subscribeStudentOnEvent(eventId, ra) {
  const subscription = await prisma.eventosInscricao.create({
    data:{
      idEvent:eventId, 
      ra: ra,
    },
    include:{
      aluno:{
        select:{
          ra:true,
        }
      }
    }
  })

  console.log(subscription)
 
 return subscription
 }
