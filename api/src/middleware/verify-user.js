import {Jwt} from "jsonwebtoken"


export function verifyUser(request, response, next) {

    try {
        const token =  request.cookies.token

        const user = Jwt.verify(token, process.env.SECREAT_KEY)
     
        next()
    } catch (error) {
        request.clearCookie("token")    
    }
     
}