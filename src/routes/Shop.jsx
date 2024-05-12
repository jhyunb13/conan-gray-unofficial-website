import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import merch from "../assets/merchData.json";
import music from "../assets/musicData.json";
import Banner from "./Banner";
import Nav from "./Nav";
import ScrollToTop from "../components/ScrollToTop";

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

  const [cartCount, setCartCount] = useState(
    getLocalstorageData("cartCount", 0)
  );
  const [itemsInCart, setItemsInCart] = useState(
    getLocalstorageData("itemsInCart", [])
  );
  const [allProductData, setAllProdcutData] = useState([
    categoryALL,
    sortData(getUniqueData(music, merch)),
  ]);
  const [merchData, setMerchData] = useState([categoryMerch, merch]);
  const [musicData, setMusicData] = useState([categoryMusic, music]);

  function getUniqueData(data1, data2) {
    return data1
      .concat(data2)
      .filter(
        (obj, i) =>
          i === data1.concat(data2).findIndex((o) => obj.title === o.title)
      );
  }

  function sortData(data) {
    const dataIncludingFh = data.filter((data) =>
      data.title.includes(`found heaven`.toUpperCase())
    );
    const dataExcludingFh = data.filter(
      (data) => !data.title.includes(`found heaven`.toUpperCase())
    );

    return dataIncludingFh.concat(dataExcludingFh);
  }

  function storeInLocalstorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function getLocalstorageData(key, initialValue) {
    const storage = localStorage.getItem(key);
    const storedItems = JSON.parse(storage);
    return storage ? storedItems : initialValue;
  }

  useEffect(() => {
    storeInLocalstorage("itemsInCart", itemsInCart);
    storeInLocalstorage("cartCount", cartCount);
  }, [itemsInCart, cartCount]);

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

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
      <ScrollToTop />
    </>
  );
}

export default Shop;
