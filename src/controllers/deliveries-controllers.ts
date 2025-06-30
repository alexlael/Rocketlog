import { Request, Response } from 'express';
import { z } from 'zod';
import { AppError } from '@/utils/AppError';
import { prisma } from '@/database/prisma';
import { ensureAuthenticated } from '@/middlewares/ensure-autheticated';


class DeliveriesController {
    create(request: Request, response: Response) {

        return response.json({ message: "DeliveriesController create method called" });
    }

}


export { DeliveriesController };