import { Outlet } from "react-router-dom";
import { useState } from "react";
import merch from "../assets/merchData.json";
import music from "../assets/musicData.json";
import Banner from "./Banner";
import Nav from "./Nav";

function Shop() {
  const categoryALL = ["All", "CD", "LP", "Cassette", "Merch"];
  const categoryMusic = ["All", "CD", "LP", "Cassette"];
  const categoryMerch = ["All", "Tops", "Outerwear", "Accessories"];
  const nav = [
    { category: "Home", link: `/` },
    { category: "All", link: `/store` },
    { category: "Music", link: `music` },
    { category: "Merch", link: `merch` },
    { category: "Cart", link: `shopping-cart` },
  ];

  const uniqueData = music
    .concat(merch)
    .filter(
      (obj, i) =>
        i === music.concat(merch).findIndex((o) => obj.title === o.title)
    );
  const comesFirst = uniqueData.filter((data) =>
    data.title.includes(`found heaven`.toUpperCase())
  );
  const comesSecond = uniqueData.filter(
    (data) => !data.title.includes(`found heaven`.toUpperCase())
  );
  const sortedData = comesFirst.concat(comesSecond);

  const [cartCount, setCartCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [allProductData, setAllProdcutData] = useState([
    categoryALL,
    sortedData,
  ]);
  const [merchData, setMerchData] = useState([categoryMerch, merch]);
  const [musicData, setMusicData] = useState([categoryMusic, music]);

  return (
    <>
      <Nav navList={nav} cartCount={cartCount} />
      <Outlet
        context={{
          cartCount: [cartCount, setCartCount],
          cartItem: [itemsInCart, setItemsInCart],
          allData: [allProductData, setAllProdcutData],
          musicData: [musicData, setMusicData],
          merchData: [merchData, setMerchData],
        }}
      />
      <Banner />
    </>
  );
}

export default Shop;
