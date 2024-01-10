import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Product({ item }) {
  const { addToCart } = useContext(StoreContext);

  const handleAdd = () => {
    addToCart(item);
  };

  return (
    <div>
      <img src={item.image} alt="" style={{ height: 100 }} />
      <div>{item.name}</div>
      <div>{item.price}</div>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
