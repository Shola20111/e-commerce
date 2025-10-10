'use client';
import { createContext, useContext, useState } from "react";

const CardContext = createContext(null);
 
export const CardProvider = ({ children }:any) => {
  const [clickedCards, setClickedCards] = useState([]);
  const [isActive, setIsActive] = useState<number | null>(null);

  const toggleCard = (product:any) => {
    setClickedCards((prev):any => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // increase click count
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      // add new product
      return [...prev, { ...product, count: 1 }];
    });
  };

  return (
    <CardContext.Provider value = {{ clickedCards, toggleCard, isActive, setIsActive }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
