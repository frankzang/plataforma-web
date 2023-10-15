import { studentRepository } from '../repository/aluno-repository.js';
import { AppError } from './error/appError.js';

export async function authenticate(ra, password) {
  const student = await studentRepository(ra);

  if (password != student.password) return null;

  return student;
}
