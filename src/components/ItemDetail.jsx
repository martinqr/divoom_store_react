import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {

  const [goToCart, setGoToCart] = useState (false)

  const onAdd = (quantity) => {
    setGoToCart(true)
  }

  return (
    <div className="card" style={{ width: "14rem" }}>
      <img className="card-img-top" src={detail.pictureUrl} alt=" " />
      <div className="card-body">
        <h5 className="card-title">{detail.title}</h5>
        <p className="card-text">{detail.description}</p>
        <h6>{detail.price}</h6>
        {
          goToCart
            ? <Link to= '/cart'>Terminar compra</Link>
            :
            <div className="btn btn-primary">
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        }
      </div>
    </div>
  )
};

export default ItemDetail;
