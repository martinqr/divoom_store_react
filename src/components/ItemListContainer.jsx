import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs } from 'firebase/firestore'


const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'items')
    getDocs(queryCollection)
    .then(res => setData( res.docs.map(product => ({id:product.id, ...product.data()}))))
  }, []);


  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
