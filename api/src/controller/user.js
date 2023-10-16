import { prisma } from '../../prisma/bd/prisma.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getUser(req, res) {
  const { user } = res.locals.auth;

  const student = await prisma.aluno.findUnique({
    where: {
      ra: user,
    },
  });
  if (student) return res.json(student);

  return res.status(401).json({ message: 'Unauthorized' });
}
