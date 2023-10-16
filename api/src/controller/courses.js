import { prisma } from '../../prisma/bd/prisma.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getCourses(_req, res) {
  const user = res.locals.user;

  const disciplines = await prisma.curso.findMany({
    where: {
      alunoId: user.id,
    },
  });

  if (disciplines) return res.json(disciplines ?? []);
}
