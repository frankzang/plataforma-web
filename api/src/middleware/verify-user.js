import jwt from 'jsonwebtoken';
import { prisma } from '../../prisma/bd/prisma.js';
import { AppError } from '../use-case/error/appError.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function verifyUser(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) throw new AppError('Invalid token', 401);

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
    res.status(error.statusCode).json({ message: error.message });
  }
}
