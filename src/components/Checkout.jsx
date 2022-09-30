import React from 'react';
import { useState } from 'react';
import Form from './Form';
import { Link } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            <h1>
                Gracias por tu compra, te dejamos el número de seguimiento:{' '}
                {orderId}
                <Link to="/home">Volver a home</Link>
            </h1>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;