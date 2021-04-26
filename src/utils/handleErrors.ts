import { Request, Response } from "express";
import HTTPError from "../errors/httpError";

export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => handleError(err, res));
  };
};

export function handleError(
  err: Error,
  res: Response
): Response<unknown> {

  if (err instanceof HTTPError) {
    return res.status(err.getCode()).json({
      status: "error",
      message: err.getMessage(),
      error: err.getBody(),
    });
  }

  return res.status(500).json({
    status: "error",
    message: err.message,
    error: err.stack,
  });
}
