import { backend } from "@/lib/axios";

export namespace ApiDeliveryNotification {
  export interface DeliveriesReturn {
    id: number;
    status: 'deslocamento' | 'pendente' | 'entregue' | 'solicitada';
    deliveryPersonId: string;
    item: Array<{
      id: number;
      name: string;
      price: number;
      category: string;
      description: string;
      image: string;
      colors: string;
      sizes: string;
      amount: number;
    }>
  };

  export async function getAllDeliveries(): Promise<DeliveriesReturn[]> {
    const response = await backend.get("/delivery");
    return response.data.data;
  }

  export async function requestDelivery(id: string, data: any): Promise<{ data: any | null, status: number | null }> {
    const response = await backend.post(`/delivery-notifications/${id}`, data).catch(() => null);
    return {
      data: response ? response.data.data : null,
      status: response ? response.status : null
    }
  }
}