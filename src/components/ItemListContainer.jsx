import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <div className="container-fluid badge bg-dark text-wrap fs-1">
      {props.title}
      <div>
        <ItemCount initial={1} stock={10} />
      </div>
    </div>
  );
};

export default ItemListContainer;
