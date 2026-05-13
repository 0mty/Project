import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (item) => {
    // Check if item already exists
    const exists = orders.find((order) => order.id === item.id);
    if (!exists) {
      setOrders([...orders, item]);
    }
  };

  const removeOrder = (itemId) => {
    setOrders(orders.filter((order) => order.id !== itemId));
  };

  const isOrderAdded = (itemId) => {
    return orders.some((order) => order.id === itemId);
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, removeOrder, isOrderAdded }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within OrderProvider");
  }
  return context;
};
