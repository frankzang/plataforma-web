import jwt from 'jsonwebtoken';
import { authenticate } from '../use-case/authenticate.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function createSession(req, res) {
  const { ra, password } = req.body;

  const student = await authenticate(ra, password);

  if (!student) return res.status(500).send('Unknown error');

  const token = jwt.sign({ user: student.ra }, process.env.SECREAT_KEY, {
    expiresIn: '1h',
  });

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 900000,
  });

  return res.status(200).json(student);
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function deleteSession(_req, res) {
  res.clearCookie('token');

  return res.status(200).json({ message: 'Logout success' });
}
