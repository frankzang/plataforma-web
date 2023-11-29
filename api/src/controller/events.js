/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

import { prisma } from '../../prisma/bd/prisma.js';
import { subscribeEventUseCase } from '../use-case/subscribe-event.js';

export async function subscribeEvent(req, res) {
  const { eventId } = req.params;
  console.log({eventId})
  const { user } = res.locals.auth;
  console.log({user})

  await subscribeEventUseCase(Number(eventId), user);


  return res.status(200).json('Inscrição realizada com sucesso');
}

export async function getAllEvents(req, res) {
  const events = await prisma.eventos.findMany({
    include:{
      alunos:{
        select:{
          ra:true,
        }
      }
    }
  });

  return res.status(200).json(events);
}

export async function getEventById(req, res) {
  const { id } = req.params;

  const idNumber = Number(id)

  const event = await prisma.eventos.findUnique({
    where: {
      id:idNumber
    },
  });

  return res.status(200).json(event ?? {});
}

export async function getUserEvents(_req, res) {
  const { user } = res.locals.auth;

  const events = await prisma.eventos.findMany({
    where: {
      alunos:{
        some:{
          ra:user.user
        }
      }
    },
  });

  return res.status(200).json(events ?? {});
}

