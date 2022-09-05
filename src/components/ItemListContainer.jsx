import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";




const items = [
    { id: 1, title: "cute", description: "divoom pixel speaker", price: 12,pictureUrl: 'https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_cute_320.png' },
    { id: 2, title: "frog", description: "divoom pixel speaker",price: 12, pictureUrl: 'https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_frog_320.png' },
    { id: 3, title: "glasses", description: "divoom pixel speaker",price: 12 ,pictureUrl: 'https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_glasses_320.png' },
    { id: 4, title: "heart", description: "divoom pixel speaker",price: 12 ,pictureUrl: 'https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_heart_320.png' },
    { id: 5, title: "laugh", description: "divoom pixel speaker", price: 12,pictureUrl: 'https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_laugh_320.png' },
    { id: 6, title: "smile", description: "divoom pixel speaker",price: 12,pictureUrl: 'https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_smile_320.png' },

  ];

export const ItemListContainer = ({ text }) => {
  const [data, setData] = useState ([])

  useEffect (() => {
    const getData = new Promise (resolve => {
      setTimeout (() => {
        resolve(items)
      }, 2000)
    })

    getData.then(res => setData(res))

  }, [] )

  return (
    <div>
      <ItemList data={data} />
    </div>
  )


}


export default ItemListContainer;
