import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context/StoreContext";
import CartLineItem from "../components/CartLineItem";

export default function Checkout() {
  const { products, total } = useContext(StoreContext);

  return (
    <div>
      <div>Cart</div>
      <p>Total: {total} </p>
      {products.map((item, i) => (
        <CartLineItem key={i} item={item} />
      ))}
    </div>
  );
}
