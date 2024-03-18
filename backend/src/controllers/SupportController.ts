import prisma from "@database";
import { NextFunction, Request, Response } from "express";

class SupportController {
  async getDeliveryPerson(req: Request, res: Response, next: NextFunction) {
    try {
      const deliveryPerson = await prisma.deliveryPerson.findFirst();

      if (!deliveryPerson) {
        return next({
          status: 404,
          message: 'Nenhum entregador encontrado',
        });
      }

      res.locals = {
        status: 200,
        data: deliveryPerson,
      }

      return next();
    } catch (error: any) {
      return next({
        status: 500,
        message: error.message,
      });
    }
  }
}

export default new SupportController();