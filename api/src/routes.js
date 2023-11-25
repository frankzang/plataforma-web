import { Router } from 'express';
import { createSession, deleteSession } from './controller/session.js';
import { getUser } from './controller/user.js';
import { verifyUser } from './middleware/verify-user.js';
import { getDisciplines } from './controller/disciplines.js';
import { getCourses } from './controller/courses.js';
import { getAllEvents, subscribeEvent } from './controller/events.js';
import { getFrequency } from './controller/frequency.js';

export const router = Router();

// Session
router.post('/session', createSession);

router.delete('/session', deleteSession);

// User
router.get('/user', verifyUser, getUser);

// Courses
router.get('/courses', verifyUser, getCourses);

// Disciplines
router.get('/disciplines', verifyUser, getDisciplines);

// Events
router.get('/event', verifyUser, getAllEvents);

router.post('/event', verifyUser, subscribeEvent);

// Frequencies
router.get('/frequency', verifyUser, getFrequency);
