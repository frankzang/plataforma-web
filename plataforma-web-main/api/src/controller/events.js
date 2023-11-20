/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

import { prisma } from '../../prisma/bd/prisma.js';
import { subscribeEventUseCase } from '../use-case/subscribe-event.js';

export async function subscribeEvent(req, res) {
  const { evendId } = req.body;
  const { user } = res.locals.auth;

  await subscribeEventUseCase(evendId, user);

  return res.status(200).send('Inscrição realizada com sucesso');
}

export async function getAllEvents(req, res) {
  // console.log('adadadasdas');
  // const events = await prisma.eventos.findMany();

  return res.status(200).json([{ id: 1 }, { id: 2 }, { id: 3 }]);
}

export async function getEventById(req, res) {
  const { id } = req.params;

  const event = await prisma.eventos.findUnique({
    where: {
      id,
    },
  });

  return res.status(200).json(event ?? {});
}
