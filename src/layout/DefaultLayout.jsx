import { Outlet } from "react-router-dom";

import ScrollToTop from "../ui/ScrollToTop";
import Banner from "../ui/Banner";
import Nav from "../ui/Nav";

console.log("Built by Bae");

function DefaultLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Banner />
      <ScrollToTop />
    </>
  );
}

export default DefaultLayout;
