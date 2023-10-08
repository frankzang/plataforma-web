import { prisma } from "../../prisma/bd/prisma.js";

export function studentRepository(ra) {
 const student = prisma.aluno.findUnique({
    where:{
        ra
    }
 })

 return student
}