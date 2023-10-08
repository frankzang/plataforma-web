import 'dotenv/config';
import express from 'express';
import "express-async-errors"
import { router } from './routes.js';
import {AppError} from "./use-case/error/appError.js"
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT || 3001;

const app = express();


app.use(cookieParser());

app.use(express.json())


app.use(router)

app.use( (err, req, res, next) => {
    if(err instanceof AppError){
     
  
      return res.status(err.statusCode).json({message: err.message})
    }
  
    console.log(err)
  
  
  
    return res.status(500).json({message: 'Internal Server Error.'})
  })

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
