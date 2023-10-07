import {studentRepository} from '../repository/aluno-repository'
import { AppError } from './error/appError'
 

export function authenticate(ra, password) {

const student = studentRepository(ra)

if(password != student.password) {
    throw new AppError("Credenciais inválidas", 401)
}


return student    
}