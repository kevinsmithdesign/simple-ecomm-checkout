import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function Product({ item }) {
  const { addToCart } = useContext(StoreContext);

  const handleAdd = () => {
    addToCart(item);
  };

  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardMedia sx={{ height: 140 }} image={item.image} title="" />
      <CardContent>
        <Typography>{item.name}</Typography>
        <Typography>{item.price}</Typography>
        <Button variant="contained" onClick={handleAdd}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
