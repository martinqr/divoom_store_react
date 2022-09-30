import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();


  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/home">Hacer Compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>
        Total: {totalPrice()}
      </p>
      <Link to="/checkout">Checkout</Link>
    </>
  );
};

export default Cart;
