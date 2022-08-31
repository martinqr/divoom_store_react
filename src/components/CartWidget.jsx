import React from "react";
import cart from "./icons/cart.png";

const CartWidget = () => {
  return (
    <a className="navbar-brand" href=" ">
      <img src={cart} alt="" />
    </a>
  );
};

export default CartWidget;
