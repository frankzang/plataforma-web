import { Router } from 'express';
import { session } from './controller/session.js';
import { prisma } from '../prisma/bd/prisma.js';
import { getUser } from './controller/user.js';
import { verifyUser } from './middleware/verify-user.js';
import { getDisciplines } from './controller/disciplines.js';
import { getCourses } from './controller/courses.js';
import { subscribeEvent } from './controller/events.js';


export const router = Router();

router.post('/session', session);

router.get('/user', verifyUser, getUser);

router.get('/courses', verifyUser, getCourses);

router.get('/disciplines', verifyUser, getDisciplines);

router.post('/event', verifyUser, subscribeEvent);
