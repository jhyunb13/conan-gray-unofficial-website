import Banner from "./Banner";
import Nav from "./Nav";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import merchData from "../assets/merchData.json";
import musicData from "../assets/musicData.json";

const categoryALL = ["All", "CD", "LP", "Cassette", "Merch"];
const categoryMusic = ["All", "CD", "LP", "Cassette"];
const categoryMerch = ["All", "Tops", "Outerwear", "Accessories"];

export async function loader() {
  const uniqueData = musicData
    .concat(merchData)
    .filter(
      (obj, i) =>
        i ===
        musicData.concat(merchData).findIndex((o) => obj.title === o.title)
    );

  const combinedData = [categoryALL, uniqueData];

  return combinedData;
}

export async function merchDataLoader() {
  const combinedData = [categoryMerch, merchData];
  return combinedData;
}

export async function musicDataLoader() {
  const combinedData = [categoryMusic, musicData];
  return combinedData;
}

function Shop() {
  console.log("Built by Bae");
  const [count, setCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  const newParam = new URLSearchParams([["page", "1"]]).toString();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>conangray.com</Link>
          </li>
          <li>
            <Link to={`/store?${newParam}`}>{`Store`.toUpperCase()}</Link>
          </li>
          <li>
            <Link to={`/store/music?${newParam}`}>{`Music`.toUpperCase()}</Link>
          </li>
          <li>
            <Link to={`/store/merch?${newParam}`}>{`Merch`.toUpperCase()}</Link>
          </li>
          <li>
            <Link to={"/store/shopping-cart"}>
              {`Cart(${count})`.toUpperCase()}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet
        context={{
          count: [count, setCount],
          cartItem: [itemsInCart, setItemsInCart],
        }}
      />
      <Banner />
    </>
  );
}

export default Shop;
