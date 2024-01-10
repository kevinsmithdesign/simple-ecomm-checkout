import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  return (
    <Box
      sx={{
        height: "60px",
        background: "#1976d2",
        width: "100%",
        margin: "0 0 48px 0",
      }}
    >
      <Container>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{ lineHeight: "60px", color: "#fff" }}
            >
              Company Name
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/checkout">
              <ShoppingCartIcon sx={{ color: "#fff" }} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
