
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

import {subscribeEventUseCase} from "../use-case/subscribe-event.js"

export async function subscribeEvent(req, res) {
    const {evendId} = req.body
    const {user} = res.locals.auth;
    
    
    
    await subscribeEventUseCase(evendId, user)
  
    return res.status(200).send("Inscrição realizada com sucesso")
  }
  