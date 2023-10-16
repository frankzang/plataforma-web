import { prisma } from '../../prisma/bd/prisma.js';

export async function classesRepository(ra) {
  const classes = await prisma.disciplina.findUnique({
    where: {
      ra,
    },
  });

  return classes;
}
