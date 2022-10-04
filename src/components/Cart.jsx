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
        <button>
        <Link to="/speakers">Hacer Compras</Link>
        </button>
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
      <button><Link to="/checkout">Checkout</Link></button>
    </>
  );
};

export default Cart;
