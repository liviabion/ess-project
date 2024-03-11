"use client";
import React, { useState, useEffect } from "react";
import { ItensStyles } from "./styles";
import {
  BlacLine,
  Previous,
  Next,
  Add,
} from "./assets";
import { ApiItens } from "@/services/itens";
import { Modal, Modal2 } from '@/components/creations/modals'

export default function Itens() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    const currentCategory = categories[currentIndex];
  
    const totalItemsInCategory = items
      .filter((item) => item.category === currentCategory)
      .length;
  
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalItemsInCategory - 4)
    );
  };
  
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

  const handleItemClick = (itemId: number, category: string) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem && prevSelectedItem.id === itemId && prevSelectedItem.category === category ? null : { id: itemId, category }
    );
    setCreateItem(null); // Disable createdItem when an item is clicked
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
      <div>
        <h1 style={ItensStyles.categoytStyle}>{category}</h1>
        <div style={ItensStyles.categoriesContainer}>
          <div style={ItensStyles.arrowsContainer}>
            <img
              src={Previous.src}
              alt="Anterior"
              style={{ width: "60px", height: "78px", cursor: "pointer" }}
              onClick={handlePreviousClick}
            />
          </div>
          <div style={ItensStyles.itensContainer}>
        
          <div key={categoryIndex} style={{display:'flex'}}>
            {items
              .filter((item) => item.category === category)
              .slice(currentIndex, currentIndex + 4)
              .map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(item.id, item.category)} // Modifique para passar o id e a categoria do item
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    cursor: "pointer"
                  }}
                >
                  <img
                    src={item.image}
                    alt={`Look ${item.name}`}
                    style={{ width: "170px", height: "200px" }}
                  />
                  <h2 style={ItensStyles.itensName}>{item.name}</h2>
                </div>
              ))}
          </div>
          </div>  
          <div style={ItensStyles.arrowsContainer}>
            <img
              src={Next.src}
              alt="Próximo"
              style={{ width: "60px", height: "78px", cursor: "pointer" }}
              onClick={handleNextClick}
            />
          </div>
        </div>
        {selectedItem && selectedItem.category === category && (
            <Modal item={items.find(item => item.id === selectedItem.id)} />
          )}
      </div>))}
    </div>
  );
}
