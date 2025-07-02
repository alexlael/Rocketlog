import { Router } from "express";
import { DeliveriesLogsController } from "@/controllers/deliveries-logs-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-autheticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const deliveryLogsRoutes = Router();
const deliveriesLogsController = new DeliveriesLogsController();

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveriesLogsController.create
);
deliveryLogsRoutes.get(
  "/:delivery_id/show",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "customer"]),
  deliveriesLogsController.show
);

export { deliveryLogsRoutes };
