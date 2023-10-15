import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import { router } from './routes.js';
import { AppError } from './use-case/error/appError.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Routers
app.use(router);

app.get('/', (req, res) => {
  console.log(req.cookies);
  res.send('Hello World');
});

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.log(err);

  return res.status(500).json({ message: 'Internal Server Error.' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
