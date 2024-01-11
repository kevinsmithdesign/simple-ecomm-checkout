import React from "react";
import { Grid } from "@mui/material";

// Data
import { storeData } from "../data/data";

// Components
import Product from "../components/Product";

export default function Home() {
  return (
    <div>
      <Grid container spacing={2}>
        {storeData.map((item, i) => (
          <Grid item xs={6} sm={4} lg={3}>
            <Product key={i} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
