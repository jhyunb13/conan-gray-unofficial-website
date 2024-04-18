import Banner from "./Banner";
import Nav from "./Nav";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import merch from "../assets/merchData.json";
import music from "../assets/musicData.json";

function Shop() {
  const categoryALL = ["All", "CD", "LP", "Cassette", "Merch"];
  const categoryMusic = ["All", "CD", "LP", "Cassette"];
  const categoryMerch = ["All", "Tops", "Outerwear", "Accessories"];

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

  const [count, setCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [allProductData, setAllProdcutData] = useState([
    categoryALL,
    sortedData,
  ]);
  const [merchData, setMerchData] = useState([categoryMerch, merch]);
  const [musicData, setMusicData] = useState([categoryMusic, music]);

  const newParam = new URLSearchParams([["page", "1"]]).toString();
  const location = useLocation();
  const currentPath = location.pathname;

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li onClick={handleScrollToTop}>
            {currentPath.includes("/store/product") ||
            currentPath === "/store" ? (
              <div className="nav-clicked">✪</div>
            ) : null}
            <Link to={`/store?${newParam}`}>{`all`.toUpperCase()}</Link>
          </li>
          <li onClick={handleScrollToTop}>
            {currentPath.includes("/store/music") && (
              <div className="nav-clicked">✪</div>
            )}
            <Link to={`/store/music?${newParam}`}>{`Music`.toUpperCase()}</Link>
          </li>
          <li onClick={handleScrollToTop}>
            {currentPath.includes("/store/merch") && (
              <div className="nav-clicked">✪</div>
            )}
            <Link to={`/store/merch?${newParam}`}>{`Merch`.toUpperCase()}</Link>
          </li>
          <li onClick={handleScrollToTop}>
            {currentPath.includes("shopping-cart") && (
              <div className="nav-clicked">✪</div>
            )}
            <Link to={"/store/shopping-cart"}>{`Cart`.toUpperCase()}</Link>
            {count ? (
              <div className="cart-num">
                <span>{count}</span>
              </div>
            ) : null}
          </li>
        </ul>
      </nav>
      <Outlet
        context={{
          count: [count, setCount],
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
