import { Router } from "express";
import SupportController from "../controllers/SupportController";

const SupportRouter = Router();

SupportRouter.get('/delivery-person', SupportController.getDeliveryPerson);

export default SupportRouter;