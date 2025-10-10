'use client'
import React, { useState, useEffect } from "react";
import ProductList from "../../components/common/textComp/ProductList";
import Cart from "../../components/common/textComp/Cart";

function TextPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">
        NOBLE JEWELRIES STORE
      </h1>

      <div className="border rounded p-3 mb-4">
        <ProductList addToCart={addToCart} />
      </div>

      <div className="border rounded p-3">
        <Cart cart={cart} removeFromCart={removeFromCart} total={total} />
      </div>
    </div>
  );
}

export default TextPage;
