import { prisma } from '../../prisma/bd/prisma.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getGrades(_req, res) {
  const { id } = res.locals.user;

  const grades = await prisma.nota.findMany({
    where: {
      idAluno: id,
    },
    include: {
      disciplina: true,
    },
  });

  return res.status(200).json(grades ?? []);
}
