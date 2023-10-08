import jwt from "jsonwebtoken"
import {authenticate} from "../use-case/authenticate.js"


export function session(request, response) {
console.log("ola")
    const {ra, password} = request.body

    const student = authenticate(ra, password)

    const token = jwt.sign(student.ra, process.env.SECREAT_KEY, {expiresIn: '1h'})

    request.cookie("token", token, {
        httpOnly: true,       
    })

    response.status(200)


}