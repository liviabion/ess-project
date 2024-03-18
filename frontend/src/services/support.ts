import { backend } from "@/lib/axios";

export namespace ApiSupport {
  export interface DeliveryPerson {
    id: string;
    name: string;
    cpf: string;
    phone: string;
    email: string;
    status: string;
    createdAt: Date;
  };

  export async function getDeliveryPerson(): Promise<DeliveryPerson | null> {
    const response = await backend.get("/support/delivery-person");
    return response.data.data;
  }
}