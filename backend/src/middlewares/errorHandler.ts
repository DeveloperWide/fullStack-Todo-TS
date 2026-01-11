import { NextFunction, Request, Response } from "express";
import ExpressError from "../utils/ExpressError";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ExpressError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: "Internal Sever Error",
  });
}
