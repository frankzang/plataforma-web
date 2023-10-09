import jwt from 'jsonwebtoken';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getUser(req, res) {
  const { token } = req.cookies;
  const tokenRes = jwt.verify(token, process.env.SECREAT_KEY);

  console.log({ tokenRes });

  const student = await prisma.aluno.findUnique({
    where: {
      ra: tokenRes.user,
    },
  });
  if (student) return res.json(student);

  return res.status(401).json({ message: 'Unauthorized' });
}
