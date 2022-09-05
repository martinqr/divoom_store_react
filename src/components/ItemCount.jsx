import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, setInitial, stock, onAdd }) => {
  [initial, setInitial] = useState(initial);
  return (
    <div>
      <h1>{initial}</h1>
      <div>
        <button
          disabled={initial === 0 ? true : false}
          onClick={() => setInitial(initial - 1)}
        >
          {" "}
          -{" "}
        </button>
        <button
          disabled={initial === stock ? true : false}
          onClick={() => setInitial(initial + 1)}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div onClick={onAdd}>
        <button
          disabled={initial === 0 ? true : false}
          onClick={() => console.log("Items agregados " + initial)}
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
