import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const {id} = useParams()

  useEffect(() => {
    const querydb = getFirestore()
    const queryDoc = doc(querydb, 'items', id)
    getDoc(queryDoc)
    .then( res => setDetail({id:res.id, ...res.data()}))
    }, [id]);

  return (
    <div className="d-flex justify-items-center detailContainer">
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;
