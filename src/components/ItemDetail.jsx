import React from "react";

const ItemDetail = ({detail}) => {
  return (
    <div className="card" style={{ width: "14rem" }}>
      <img className="card-img-top" src={detail.pictureUrl} alt=" " />
      <div className="card-body">
        <h5 className="card-title">{detail.title}</h5>
        <p className="card-text">{detail.description}</p>
        <h6>{detail.price}</h6>
        <a href=" " className="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  )
};

export default ItemDetail;
