import React from "react";

const Item = ({ info }) => {
  return (
    <div className="card" style={{ width: "14rem" }}>
      <img className="card-img-top" src= {info.pictureUrl} alt=" " />
      <div className="card-body">
        <p className="card-text">
         <h5>{info.title}</h5>
        </p>
      </div>
    </div>
  );
};

export default Item;
