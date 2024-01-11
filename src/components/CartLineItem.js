import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

export default function CartLineItem({ item }) {
  const { removeFromCart } = useContext(StoreContext);

  const handleRemove = () => {
    removeFromCart(item);
  };

  return (
    <Card sx={{ mb: 1, boxShadow: 0 }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography>{item.price}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="contained" onClick={handleRemove}>
              Remove
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
