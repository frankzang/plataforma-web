export class AppError extends Error {
    constructor(text, statusCode){
        super(text)
        this.statusCode = statusCode

    }

}