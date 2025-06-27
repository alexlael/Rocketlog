import { Request, Response, } from "express";

class SessionsController {
  create(request: Request, response: Response) {
   return response.json({message: "Session created successfully"});
  }
}


export { SessionsController };