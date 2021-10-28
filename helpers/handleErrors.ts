import { Response } from "express";

const handleError = (error: unknown, res: Response, status: number, msg: string) => {
    if(error) console.log(error);
    
    res.status(status).json({
        msg
    });
}

export {
    handleError
}