import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="" style={{ width: "16rem" }}>
      <Link to={`/item/${info.id}`} className="nav-link">
        <img className="card-img-top" src={info.pictureUrl} alt=" " />
      </Link>
        <p className="card-text">
          <h5>{info.title}</h5>
        </p>
    </div>
  );
};

export default Item;
