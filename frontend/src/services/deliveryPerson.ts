
import { backend } from "@/lib/axios";

export namespace ApiDeliveryPerson {
  export async function getExample(cpf: string) {
    console.log(cpf)
    const response = await backend.get(`/deliveryperson/cpf/${cpf}`).catch();
    console.log(response.data.data)
    return response.data.data;
  }
  interface createDeliveryPerson {
    
      deliveryPersonData: {
        name: string ,
        cpf: string,
        email: string,
        phone: string,
        status: string
      },
      addressData: {
        postalCode: string,
        street: string,
        number: string,
        district: string,
        state: string,
        city: string
      }
   
  }
  export async function createExample(data: createDeliveryPerson) {
    const response = await backend.post('/deliveryperson', data);
    return response.data.data;
  }
}