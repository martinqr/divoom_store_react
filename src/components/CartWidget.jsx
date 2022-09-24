import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <Link to="/cart" className="navbar-brand">
      <span class="material-symbols-outlined">shopping_cart</span>
      <span>{totalProducts() || ''}</span>
    </Link>
  );
};

export default CartWidget;
