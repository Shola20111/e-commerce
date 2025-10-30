'use client';
import { createContext, useContext, useState } from "react";

const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const [clickedCards, setClickedCards] = useState([]);
  const [isActive, setIsActive] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Track clicked cards and count clicks
  const toggleCard = (product) => {
    setClickedCards((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  // Remove clicked card
  const removeCards = (id) => {
    setClickedCards((prev) => prev.filter((item) => item.id !== id));
  };

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(quantity, 1) } : p
      )
    );
  };

  // Calculate total
  const total = cartItems.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <CardContext.Provider
      value={{
        clickedCards,
        toggleCard,
        removeCards,
        isActive,
        setIsActive,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

// ✅ Proper hook
export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};
