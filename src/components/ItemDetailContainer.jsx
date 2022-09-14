import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import { items } from "./ItemListContainer"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const {id} = useParams()

  useEffect(() => {
    const getDetail = new Promise((resolve) => {
      const itemFind = items.find((prod) => prod.id === id )
      setTimeout(() => {
        resolve(itemFind);
      }, 2000);
    });

    getDetail.then((res) => setDetail(res));
  },);

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;
