import { Outlet } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import Banner from "./Banner";
import Nav from "./Nav";

console.log("Built by Bae");

const NAV = [
  { category: "Home", link: `/` },
  { category: "listen", link: `listen` },
  { category: "videos", link: `videos` },
  { category: "tour", link: `tour` },
  { category: "store", link: `store` },
];

function Root() {
  return (
    <>
      <Nav navList={NAV} />
      <Outlet />
      <Banner />
      <ScrollToTop />
    </>
  );
}

export default Root;
