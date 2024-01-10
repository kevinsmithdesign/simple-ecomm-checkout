import React from "react";

// Data
import { storeData } from "../data/data";

// Components
import Navbar from "../components/Navbar";
import Product from "../components/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      {storeData.map((item, i) => (
        <Product key={i} item={item} />
      ))}
    </div>
  );
}
