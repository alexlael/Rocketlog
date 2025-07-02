import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";

class DeliveriesLogsController {
  async create(request: Request, response: Response) {
    const bodyschema = z.object({
      delivery_id: z.string().uuid(),
      description: z.string().min(1).max(255),
    });

    const { delivery_id, description } = bodyschema.parse(request.body);

    const delivery = await prisma.delivery.findUnique({
      where: {
        id: delivery_id,
      },
    });

    if (!delivery) {
      throw new AppError("Delivery not found", 404);
    }

    if (delivery.status === "processing") {
      throw new AppError(
        "Cannot create log for a delivery that is still processing",
        400
      );
    }

    await prisma.deliveryLog.create({
      data: {
        deliveryId: delivery_id,
        description,
      },
    });

    return response.status(201).json({
      message: "Delivery log created successfully",
    });
  }

  async show(request: Request, response: Response) {
    const paramsSchema = z.object({
      delivery_id: z.string().uuid(),
    });

    const { delivery_id } = paramsSchema.parse(request.params);

    const delivery = await prisma.delivery.findUnique({
      where: {
        id: delivery_id,
      },
    });

    if(request.user?.role === "customer" && request.user.id !== delivery?.userId) {}

    return response.status(200).json(delivery);
  }
}

export { DeliveriesLogsController };
