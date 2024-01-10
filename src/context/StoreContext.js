import { createContext, useReducer } from "react";
import StoreReducer, { initialState } from "./StoreReducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.products;
    updatedCart.push(product);
    updatedPrice(updatedCart);
    dispatch({ type: "add", payload: updatedCart });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.productName !== product.productName
    );
    updatedPrice(updatedCart);
    dispatch({ type: "remove", payload: updatedCart });
  };

  const updatedPrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    dispatch({ type: "price", payload: total });
  };
  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
