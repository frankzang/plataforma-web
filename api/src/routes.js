import { Router } from 'express';
import { session } from './controller/session.js';

export const router = Router();

router.post('/session', session);
