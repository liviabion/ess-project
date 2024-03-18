import prisma from "../database";
import { Prisma } from "@prisma/client";

async function seed() {
  //const user = await prisma.user.create({
    //data: {
      //name: 'Ric',
      //phone: '81999999999',
      //cpf: '11111111111',
      //email: 'ric@ric.com',
      //password: '123456'
    //}
  //});

  const card = await prisma.cardPayment.create({
    data: {
      card_number: '9999 9999 9999 9999',
      number: user.id,
      cvv: 187,
      expire_date: new Date(),
      name: "Ric",
      password: "999",
      type: "credit"
    }
  })

  const itemsToCreate: Prisma.ItemCreateInput[] = [
    {
      name: 'Blusa Polo',
      description: 'Chique mas não tão confortável',
      category: 'Blusa',
      price: 50,
      image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/nine4sto/catalog/camiseta-algodao/polo-preta-1.jpg',
      colors: 'Azul, Vermelho, Preto',
      sizes: 'P, M, G',
      amount: 10,
    },
    {
      name: 'Blusa de Luan Santana',
      description: 'A lua até beijou o mar...',
      category: 'Blusa',
      price: 50,
      image: 'https://images-americanas.b2w.io/produtos/3482322301/imagens/camisa-camiseta-personalizada-luan-santana-cantor-8/3482322319_1_large.jpg',
      colors: 'Azul, Vermelho, Preto',
      sizes: 'P, M, G',
      amount: 10,
    },
    {
      name: 'Blusa do Metallica',
      description: 'Blusa braba, banda incrível, do rock, só benefícios!',
      category: 'Blusa',
      price: 88,
      image: 'https://images.tcdn.com.br/img/img_prod/1147522/camiseta_metallica_logo_148311_1_0ede675685c909a0a1cfa9372146f09a.jpeg',
      colors: 'Azul, Vermelho, Preto',
      sizes: 'P, M, G',
      amount: 10,
    },
  ]

  //Create items and store their IDs
  const itemsId = await Promise.all(itemsToCreate.map(async (item) => {
    const createdItem = await prisma.item.create({ data: item });
    return createdItem.id;
  }));

  // Create a delivery with the status "entregue" and connect the three items
  await prisma.delivery.create({
    data: {
      status: 'entregue',
      item: {
        connect: itemsId.map(id => ({ id })),
      },
    },
  });
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })