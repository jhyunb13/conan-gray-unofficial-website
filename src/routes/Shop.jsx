import { Outlet } from "react-router-dom";

import Banner from "./Banner";
import Nav from "./Nav";
import ScrollToTop from "../components/ScrollToTop";

const NAV = [
  { category: "Home", link: `/` },
  { category: "All", link: `/store` },
  { category: "Music", link: `music` },
  { category: "Merch", link: `merch` },
  { category: "Cart", link: `shopping-cart` },
];

function Shop() {
  return (
    <>
      <Nav navList={NAV} />
      <Outlet />
      <Banner />
      <ScrollToTop />
    </>
  );
}

export default Shop;
