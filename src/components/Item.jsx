import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="card" style={{ width: "14rem" }}>
      <Link to={`/item/${info.id}`} className="nav-link">
        <img className="card-img-top" src={info.pictureUrl} alt=" " />
      </Link>
      <div className="card-body">
        <p className="card-text">
          <h5>{info.title}</h5>
        </p>
      </div>
    </div>
  );
};

export default Item;
