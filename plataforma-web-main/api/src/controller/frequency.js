import { prisma } from '../../prisma/bd/prisma.js';
import { add, endOfMonth, startOfMonth, toDate } from 'date-fns';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

export async function getFrequency(req, res) {
  // ISO date format, example: 2021-09-01
  const { date } = req.query;
  const { user } = res.locals;

  const frequencies = await prisma.frequenciaDisciplina.findMany({
    where: {
      idAluno: user.id,
      AND: {
        data: {
          gte: startOfMonth(new Date(date)),
          lte: endOfMonth(new Date(date)),
        },
      },
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
