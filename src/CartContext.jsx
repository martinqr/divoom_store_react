import React from "react";
import { useContext } from "react";
import { useState } from "react";

const CartContext = React.createContext("");

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cart,setCart]= useState ([]);

    const addItem = (item,quantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({...item,quantity: quantity,price: item.price * quantity})
        setCart(newCart);
    }

    console.log('cart: ', cart)

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
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider