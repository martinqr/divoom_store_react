import React from "react";

const Item = ({ info }) => {
  return (
    <a href=" " className="">
      <img src={info.pictureUrl} alt="" />
      <div>
        <b>{info.title}</b>
        <p>{info.description}</p>
        <p>{info.price}</p>
      </div>
    </a>
  );
};

export default Item;
