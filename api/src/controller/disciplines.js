import { prisma } from '../../prisma/bd/prisma.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getDisciplines(_req, res) {
  const { user } = res.locals.auth;

  const disciplines = await prisma.disciplina.findUnique({
    where: {},
  });

  if (disciplines) return res.json(disciplines ?? []);
}
