import { Request, Response } from "express";
import HTTPError from "../errors/httpError";

export function handleError(err: Error, _: Request, res: Response): Response<unknown> {

    if (err instanceof HTTPError) {
        return res.status(err.getCode()).json({
            status: "error",
            message: err.getMessage(),
            errors: err.getBody(),
        });
    }

    return res.status(500).json({
        status: "error",
        message: err.message,
        error: err.stack
    });

}


