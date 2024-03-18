"use client";
import React, { useState, useEffect } from "react";
import { ItensStyles } from "./styles";
import {
  BlacLine,

  Add,
} from "./assets";
import { ApiItens } from "@/services/itens";
import { Modal2 } from '@/components/creations/modals'
import { Carousel } from '@/components/carousel/carousel'

export default function Itens() {
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
const [selectedItem, setSelectedItem] = useState<{ id: number, category: string } | null>(null);
const [createdItem, setCreateItem] = useState(null);

  
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
    } catch (error) {
      console.error("Erro ao obter informações:", error);
    }
  };
  const handleAddClick = (itemIndex: any) => {
    setCreateItem((prevCreateItem) =>
      prevCreateItem === itemIndex ? null : itemIndex
    );
    setSelectedItem(null);
  };
  return (
    <div style={ItensStyles.container}>
      <img
        src={BlacLine.src}
        alt="Linha preta"
        style={{ width: "318px", height: "27px" }}
      />
      <div style={{display:'flex', justifyContent:'space-between', padding:'0 25px 0 20px'}}>
      <text style={ItensStyles.title}>Adicionar Itens</text>
      <img
              src={Add.src}
              alt="Adicionar"
              style={{ width: "50px", height: "68px", cursor: "pointer" }}
              onClick={() => handleAddClick(1)}
            /> </div>
       {createdItem !== null && (
                  <Modal2 />

        )}
      {categories.map((category, categoryIndex) => (
        <Carousel
          category={category}
         categoryIndex={categoryIndex}/>
    ))}
    </div>
  );
}
