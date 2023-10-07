import {Jwt} from "jsonwebtoken"
import {authenticate} from "../use-case/authenticate"


export function sessionController(request, response) {
    const {ra, password} = request.body

    const student = authenticate(ra, password)

    const token = Jwt.sign(student.ra, process.env.SECREAT_KEY, {expiresIn: '1h'})

    request.cookie("token", token, {
        httpOnly: true,
       
    })


}