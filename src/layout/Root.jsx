import { Outlet } from "react-router-dom";

import ScrollToTop from "../ui/ScrollToTop";
import Banner from "../ui/Banner";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

console.log("Built by Bae");

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <Banner />
      <ScrollToTop />
    </>
  );
}

export default Root;
