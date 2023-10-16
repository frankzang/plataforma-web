import jwt from 'jsonwebtoken';
import { prisma } from '../../prisma/bd/prisma.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function verifyUser(req, res, next) {
  try {
    const token = req.cookies.token;

    const user = jwt.verify(token, process.env.SECREAT_KEY);

    const userFromDb = await prisma.aluno.findUnique({
      where: {
        ra: user.user,
      },
    });

    res.locals.auth = user;
    res.locals.user = userFromDb;

    next();
  } catch (error) {
    console.error(error);
    res.clearCookie('token');
  }
}
