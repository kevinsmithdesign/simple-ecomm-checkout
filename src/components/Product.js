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
      <CardMedia
        sx={{
          height: 180,
          // TODO: Fix image alignment
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        image={item.image}
        title=""
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {item.name}
        </Typography>
        <Typography variant="h6" mb={2}>
          ${item.price}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{ boxShadow: 0 }}
          onClick={handleAdd}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
