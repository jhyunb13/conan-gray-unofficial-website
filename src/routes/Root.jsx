import Banner from "./Banner";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <Banner />
    </>
  );
}

export default Root;
