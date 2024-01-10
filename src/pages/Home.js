import React from "react";
import { Container, Grid } from "@mui/material";

// Data
import { storeData } from "../data/data";

// Components
import Navbar from "../components/Navbar";
import Product from "../components/Product";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Container>
        <Grid container spacing={2}>
          {storeData.map((item, i) => (
            <Grid item xs={12} md={4}>
              <Product key={i} item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
