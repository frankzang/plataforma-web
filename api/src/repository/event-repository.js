import { prisma } from "../../prisma/bd/prisma.js";

export  async function findEventById(eventId) {
    const event = prisma.eventos.findFirst({
        where:{
            id:eventId
        }
    })

   

    return event
}