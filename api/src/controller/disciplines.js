import { prisma } from '../../prisma/bd/prisma.js';

const buildDiscipline = ({ disciplina }) => disciplina;

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

export async function getDisciplines(_req, res) {
  const { user } = res.locals;

  const disciplines = await prisma.alunoDisciplina.findMany({
    where: {
      idAluno: user.id,
    },
    include: {
      disciplina: true,
    },
  });

  const disciplinesFormatted =
    disciplines?.map((discipline) => {
      return buildDiscipline(discipline);
    }) ?? [];

  return res.json(disciplinesFormatted);
}
