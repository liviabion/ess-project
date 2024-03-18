import { backend } from "@/lib/axios";

export namespace ApiPromotions {
  export async function getPromotions() {
    const response = await backend.get(`/promotion`);
    console.log(response.data.data)
    return response.data.data;
  }
  interface createPromotion {
        category: string,
        discount: string,
        start_date: string,
        end_date: string,
  }
  export async function createExample(data: createPromotion) {
    const response = await backend.post('/promotion', data);
    return response.statusText;
  }
  
export async function deleteExample(id: number) {
    const response = await backend.delete(`/promotion/${id.toString()}`);
    return response.data.data;
    }

}