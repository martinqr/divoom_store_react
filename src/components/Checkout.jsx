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
            <h2>
                Gracias por tu compra, te dejamos el número de seguimiento:{' '}
                {orderId}
                <div>
                    <button>
                    <Link to="/">Volver a home</Link>
                    </button>
                </div>
            </h2>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};

export default Checkout;