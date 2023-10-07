import 'dotenv/config';
import express from 'express';
import { Approutes } from './src/routes';

const PORT = process.env.PORT || 3000;

const app = express();

app.route(Approutes)


app.get('/', (_req, res) => {
  res.send('Hello Node.js!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
