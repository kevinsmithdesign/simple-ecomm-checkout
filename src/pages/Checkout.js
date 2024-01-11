import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context/StoreContext";
import CartLineItem from "../components/CartLineItem";
import { Typography } from "@mui/material";

export default function Checkout() {
  const { products, total } = useContext(StoreContext);

  return (
    <div>
      <Typography variant="h4" mb={2}>
        Cart
      </Typography>
      {products.map((item, i) => (
        <CartLineItem key={i} item={item} />
      ))}
      <Typography variant="h6" my={2}>
        Total: {total}{" "}
      </Typography>
    </div>
  );
}
