import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import { items } from "./ItemListContainer"

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const getDetail = new Promise((resolve) => {
      const itemFind = items.find((prod) => prod.id === 1)
      setTimeout(() => {
        resolve(itemFind);
      }, 2000);
    });

    getDetail.then((res) => setDetail(res));
  }, []);

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;
