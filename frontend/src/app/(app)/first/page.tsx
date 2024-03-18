"use client";
import React, { useState, useEffect } from "react";
import { ItensStyles } from "./styles";
import {
  BlacLine,
Pencil
} from "./assets";
import { ApiItens } from "@/services/itens";
import { Carousel2 } from '@/components/carouselHome/carousel'

export default function Inicio() {
  const [categories, setCategories] = useState<string[]>([]); // State to store unique categories

  interface createItem {
    id: number,
    name: string,
    price: number,
    category: string,
    description: string,
    image: string,
    colors: string,
    sizes: string,
    amount: number,
}
  const [firstItemsByCategory, setFirstItemsByCategory] = useState<createItem[]>([]);

  const [items, setItems] = useState<createItem[]>([]); // Specify the type for items
  useEffect(() => {
    getItens();
  }, []);

  const getItens = async () => {
    try {
      const fetchedItems: createItem[] = await ApiItens.getItens();
      console.log("Fetched Items:", fetchedItems);

      // Extract unique categories from the fetched items
      const uniqueCategories = Array.from(new Set(fetchedItems.map(item => item.category)));
      setCategories(uniqueCategories);

      // Set the items state
      setItems(fetchedItems);

      // Create a list with the first item of each category
      const firstItems: { [key: string]: createItem } = fetchedItems.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = item;
        }
        return acc;
      }, {} as { [key: string]: createItem }); // Add index signature to the object type

      // Convert the object to an array
      const firstItemsArray = Object.values(firstItems);
      setFirstItemsByCategory(firstItemsArray);

    } catch (error) {
      console.error("Erro ao obter informações:", error);
    }
 };

  return (
    <div style={ItensStyles.container}>
      <img
        src={Pencil.src}
        alt="Capa"
        style={{ width: "100%",paddingBottom: "40px" }}
      />
      <img
        src={BlacLine.src}
        alt="Linha preta"
        style={{ width: "300px", height: "20px"}}
      />
      <div style={{display:'flex', justifyContent:'space-between', padding:'0 25px 0 20px'}}>
      <text style={ItensStyles.title}>Tendências</text>
     </div>
       <Carousel2
          category="Calças"
         categoryIndex={0}/>
    <button style={ItensStyles.cartButton}>Ir para o Carrinho</button>

    </div>
  );
}
