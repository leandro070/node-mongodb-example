import { NextFunction, Request, Response } from "express";
import HTTPError from "../errors/httpError";

export function handleError(err: Error, req: Request, res: Response, next: NextFunction): Response<unknown> {
    if (err instanceof HTTPError) {
        return res.status(err.getCode()).json({
            status: "error",
            message: err.getMessage(),
            errors: err.getBody(),
        });
    }

    console.error(err);
    return res.status(500).json({
        status: "error",
        message: err.message,
        error: err.stack
    });

}


