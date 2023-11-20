import { studentRepository } from '../repository/aluno-repository.js';

export async function authenticate(ra, password) {
  const student = await studentRepository(ra);

  if (!student || student.password != password) return null;

  return student;
}
