import React, { useState, useEffect } from "react";
import { ItensStyles } from "@/components/carousel/styles";
import {
    Previous,
    Next,
  } from "./assets";

import { ApiItens } from "@/services/itens";
import { Modal } from '@/components/creations/modals'


interface Props {
  category: string;
  categoryIndex: number;
}


const Carousel2: React.FC<Props> = ({ category, categoryIndex }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [categories, setCategories] = useState<string[]>([]); // State to store unique categories
    const [createdItem, setCreateItem] = useState(null);

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

  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= items.filter((item) => item.category === category).length - 5;
  console.log("currentIndex:", currentIndex);
  console.log(items.filter((item) => item.category === category).length - 4);
  return (
    <div>
        <div style={ItensStyles.categoriesContainer}>
          <div style={ItensStyles.arrowsContainer}>
          <img
            src={Previous.src}
            alt="Anterior"
            style={{
              width: "60px",
              height: "78px",
              cursor: "pointer",
              opacity: isPreviousDisabled ? 0.5 : 1, // Adjust the opacity based on whether it's disabled or not
            }}
            onClick={isPreviousDisabled ? undefined : handlePreviousClick} // Disable the click event if it's disabled
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
                  <h2>R$ {item.price}</h2>
                </div>
              ))}
          </div>
          </div>  
          <div style={ItensStyles.arrowsContainer}>
          <img
              src={Next.src}
              alt="Próximo"
              style={{
                width: "60px",
                height: "78px",
                cursor: "pointer",
                opacity: isNextDisabled ? 0.5 : 1, // Adjust the opacity based on whether it's disabled or not
              }}
              onClick={isNextDisabled ? undefined : handleNextClick} // Disable the click event if it's disabled
            />
          </div>
        </div>
       
      </div>
  );
};
export { Carousel2 };
