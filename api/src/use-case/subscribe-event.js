import { findStudentOnEvent, subscribeStudentOnEvent } from "../repository/aluno-repository.js";
import { findEventById } from "../repository/event-repository.js";

import { AppError } from "./error/appError.js";

export async function subscribeEventUseCase(eventId, ra) {
    const event =  await findEventById(eventId)

    if(event.statusId === 5) return AppError("O evento está indisponível para inscrição", 400)

    if(!event) throw new AppError("Evento não encontrado", 400)

    const aluno = await findStudentOnEvent(eventId)

    if(aluno) throw new AppError("Aluno já inscrito no evento", 400)

    await subscribeStudentOnEvent(eventId, ra)

    return
}