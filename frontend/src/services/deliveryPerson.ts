
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
    return response.statusText;
  }
  interface UpdateUserData {
    deliveryPersonData: {
      name: string ,
      cpf: string,
      email: string,
      phone: string,
      status: string
    },
    addressData: {

    }
  }

   
    export async function updateUser(cpf: string, userData: UpdateUserData) {
      const response = await backend.patch(`/deliveryperson/${cpf}`, userData);
      return response.data.data;
    }
 
    interface UpdateAddressData {
      street: string;
      number: string;
      district: string;
      state: string;
      city: string;
    }
  
    export async function updateAddress(cpf: string, addressData: UpdateAddressData) {
      const response = await backend.patch(`/deliveryperson/address/${cpf}`, addressData);
      return response.data.data;
    }
}
