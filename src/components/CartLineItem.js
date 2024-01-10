import React from "react";

export default function CartLineItem({ item }) {
  return (
    <>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <button>Remove</button>
    </>
  );
}
