
import { backend } from "@/lib/axios";

export namespace ApiItens {
  export async function getItens() {
    const response = await backend.get(`/itens`); //RESOLVER
    console.log(response.data.data)
    return response.data.data;
  }
  interface createItem {
        name: string,
        price: number,
        category: string,
        description: string,
        image: string,
        colors: string,
        sizes: string,
        amount: number,
  }
  export async function createExample(data: createItem) {
    const response = await backend.post('/itens', data);
    return response.statusText;
  }

  interface UpdateData {
        name?: string,
        price?: number,
        category?: string,
        description?: string,
        image?: string,
        colors?: string,
        sizes?: string,
        amount?: number,      
  }

    export async function updateUser(id: number, userData: UpdateData) {
      const response = await backend.patch(`/itens/${id}`, userData); //RESOLVER
      return response.data.data;
    }
 
    export async function deleteExample(id: number) {
        const response = await backend.delete(`/itens/${id}`);
        return response.data.data;
        }

}