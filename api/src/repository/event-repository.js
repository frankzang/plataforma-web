import { prisma } from "../../prisma/bd/prisma.js";

export  async function findEventById(eventId) {
    const event = await prisma.eventos.findFirst({
        where:{
            id:eventId
        },
        include:{
            alunos:{
                select:{
                    ra:true
                }
            }
        }
    })

    return event
}