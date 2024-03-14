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

  const itemsToCreate: Prisma.ItemCreateInput[] = [
    {
      name: 'Blusa Polo',
      description: 'Chique mas não tão confortável',
      category: 'Blusa',
      price: 50,
      image: 'https://cdn.awsli.com.br/600x700/248/248472/produto/107742308/1bb654cb0d.jpg',
      colors: 'Azul, Vermelho, Preto',
      sizes: 'P, M, G',
      amount: 10,
    },
    {
      name: 'Blusa Luan Santana',
      description: 'A lua até beijou o mar...',
      category: 'Blusa',
      price: 50,
      image: 'https://images-americanas.b2w.io/produtos/3482322301/imagens/camisa-camiseta-personalizada-luan-santana-cantor-8/3482322319_1_large.jpg',
      colors: 'Azul, Vermelho, Preto',
      sizes: 'P, M, G',
      amount: 10,
    },
    {
      name: 'Blusa Metallica',
      description: 'Blusa braba, banda incrível, só benefícios!',
      category: 'Blusa',
      price: 50,
      image: 'https://images.tcdn.com.br/img/img_prod/460977/camiseta_demon_james_metallica_65651_1_20201211172206.jpeg',
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