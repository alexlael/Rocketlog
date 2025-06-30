import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";

function verifyUserAuthorization(role: string[]) {
  return function (request: Request, response: Response, next: NextFunction) {
    if (!request.user) {
      throw new AppError("User not authenticated", 401);
    }

    if (!role.includes(request.user.role)) {
      throw new AppError(
        "User does not have permission to perform this action",
        403
      );
    }

    return next();
  };
}

export { verifyUserAuthorization };
