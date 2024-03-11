
import { backend } from "@/lib/axios";

export namespace ApiCupons {
  export async function getCupons() {
    const response = await backend.get(`/cupons`);
    console.log(response.data.data)
    return response.data.data;
  }
  interface createCupon {
        name: string,
        discount: string,
        start_date: string,
        end_date: string,
  }
  export async function createExample(data: createCupon) {
    const response = await backend.post('/cupons', data);
    return response.statusText;
  }
  
export async function deleteExample(id: number) {
    const response = await backend.delete(`/cupons/${id.toString()}`);
    return response.data.data;
    }

}