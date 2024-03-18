import { backend } from "@/lib/axios";

export namespace ApiCardPayment {
  export interface CardPayment {
    card_number: string;
    card_id: string;
    number: number;
    cvv: number;
    expire_date: Date;
    name: string;
    password: string;
    type: string;
  }

  export async function getExample(number: string):Promise<CardPayment[]> {
    console.log(number)
    const response = await backend.get(`/payment_methods/${number}`).catch();
    console.log(response.data.data)
    return response.data.data;
  }

  interface createCardPayment {
      cardCreatedData: {
        card_number: string,
        cvv: number,
        expire_date: Date,
        name: string,
        password: string,
        type: string
      },

      User_id: number
  }

  export async function createExample(data: createCardPayment) {
    const response = await backend.post('/payment_methods', data);
    return response.statusText;
  }

  export async function removeExample(card_id: string) {
    console.log(card_id)
    const response = await backend.delete(`/payment_methods/${card_id}`).catch();
    return response.statusText;
  }
}