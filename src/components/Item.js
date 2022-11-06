import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  function addToCart (event) {
    setCart(() => !inCart)
    console.log(event.target.parentElement.className)
  }
  return (
    <li className= {inCart ? 'in-cart' : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = { addToCart }> {inCart ? "Remove from cart" : "Add to cart"} </button>
    </li>
  );
}

export default Item;
