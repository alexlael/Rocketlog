import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import { hash } from "bcrypt";
import {z} from "zod";

class UsersController {
  async create(request: Request, response: Response) {

    const bodySchema = z.object({
      name: z.string().trim().min(1, "Name is required"),
      email: z.string().email("Invalid email format"),
      password: z.string().min(6, "Password must be at least 6 characters long")
    })
    
    const { name, email, password } = bodySchema.parse(request.body);

    const userWhithSameEmail = await prisma.user.findFirst({where: { email }});

    if (userWhithSameEmail) {
      throw new AppError("Email already in use", 400);
    }

    const hashedPassword = await hash(password, 8);
    
    const user = await prisma.user.create({
      data:{
        name,
        email,
        password: hashedPassword,
      }
    })
    
    const { password: _, ...userWhithoutPassword } = user

    return response.status(201).json(userWhithoutPassword);
  }
}




export { UsersController };