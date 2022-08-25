import React from "react";
import cart from "./icons/cart.png";

class CartWidget extends React.Component {
  render() {
    return (
      <a className="navbar-brand" href=" ">
        <img src={cart} alt="" />
      </a>
    );
  }
}

export default CartWidget;
