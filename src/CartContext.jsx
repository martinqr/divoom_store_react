import React from "react";
import { useContext } from "react";
import { useState } from "react";

const CartContext = React.createContext("");

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cart,setCart]= useState ([]);

    const addItem = (item,quantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({...item,quantity: quantity})
        setCart(newCart);
    }

    console.log('cart: ', cart)

    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    const clearCart = () => setCart ([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value= {{
            clearCart,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider