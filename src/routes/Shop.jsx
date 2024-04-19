import Banner from "./Banner";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import merch from "../assets/merchData.json";
import music from "../assets/musicData.json";

function Shop() {
  const newParam = new URLSearchParams([["page", "1"]]).toString();
  const location = useLocation();
  const currentPath = location.pathname;

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

  const [count, setCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [allProductData, setAllProdcutData] = useState([
    categoryALL,
    sortedData,
  ]);
  const [merchData, setMerchData] = useState([categoryMerch, merch]);
  const [musicData, setMusicData] = useState([categoryMusic, music]);

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <nav>
        <ul>
          {nav.map((n) => {
            return (
              <li onClick={handleScrollToTop} key={n.category}>
                {currentPath === `/store/${n.link}` && (
                  <div className="nav-clicked">✪</div>
                )}
                {(currentPath.includes(`${n.link}/products`) ||
                  currentPath === n.link) && (
                  <div className="nav-clicked">✪</div>
                )}
                {n.category === "Home" || n.category === "All"}
                <Link to={`${n.link}?${newParam}`}>
                  {n.category.toUpperCase()}
                </Link>
                {n.link === "shopping-cart" && count ? (
                  <div className="cart-num">
                    <span>{count}</span>
                  </div>
                ) : null}
              </li>
            );
          })}
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
