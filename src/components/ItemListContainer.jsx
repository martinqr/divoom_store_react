import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


export const items = [
  {
    id: "1",
    title: "Cute Speaker",
    description:
      "The most visually pleasing,funniest, feature pocked cute Blueetooth speaker you can get.Bright colors on the 16 x 16 pixel screen which adds to the theme of retro arcade style.",
    price: 12,
    quantity: 0,
    pictureUrl:
      "https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_cute_320.png",
  },
  {
    id: "2",
    title: "Frog Speaker",
    description:
      "The most visually pleasing,funniest, feature pocked cute Blueetooth speaker you can get. Bright colors on the 16 x 16 pixel screen which adds to the theme of retro arcade style.",
    price: 12,
    quantity: 0,
    pictureUrl:
      "https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_frog_320.png",
  },
  {
    id: "3",
    title: "Glasses Speaker ",
    description:
      "The most visually pleasing,funniest, feature pocked cute Blueetooth speaker you can get. Bright colors on the 16 x 16 pixel screen which adds to the theme of retro arcade style.",
    price: 12,
    quantity: 0,
    pictureUrl:
      "https://martinqr.github.io/divoom_store/assets/img/320px/ditoo_glasses_320.png",
  },
];

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 100);
    });

    getData.then((res) => setData(res));
  }, []);


  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
