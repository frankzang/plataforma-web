import jwt from "jsonwebtoken"
import {authenticate} from "../use-case/authenticate.js"


export async function session(request, response) {

    const {ra, password} = request.body

    const student = authenticate(ra, password)

    const token = jwt.sign({user:student.ra}, process.env.SECREAT_KEY, {expiresIn: "1h"})

 

    response.cookie("token", token, {
        httpOnly: true,       
    })

    return response.status(200).send("Usuário autenticado com sucesso ")


}