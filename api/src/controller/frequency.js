import { prisma } from '../../prisma/bd/prisma.js';
import { add, endOfMonth, startOfMonth, toDate } from 'date-fns';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

export async function getFrequency(req, res) {
  const { user } = res.locals;

  const frequencies = await prisma.frequenciaDisciplina.findMany({
    where: {
      idAluno: user.id,
    },
    select: {
      id: true,
      presenca: true,
      data: true,
      justificativa: true,
      disciplina: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  return res.json(frequencies ?? []);
}
