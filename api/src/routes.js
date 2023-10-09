import { Router } from 'express';
import { session } from './controller/session.js';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma/bd/prisma.js';
import { getUser } from './controller/user.js';

export const router = Router();

router.post('/session', session);

router.get('/user', getUser);
