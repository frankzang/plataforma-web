import { prisma } from "../../prisma/bd/prisma.js";

export async function studentRepository(ra) {
 const student = await prisma.aluno.findUnique({
    where:{
        ra
    }
 })

 return student
}