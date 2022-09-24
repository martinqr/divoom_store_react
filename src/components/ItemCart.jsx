import React from "react";
import { useCartContext } from "../CartContext";

const ItemCart = ({product}) => {

    const {removeItem} = useCartContext()

    return (
        <div>
            <img src={product.pictureUrl} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart