import Banner from "./Banner";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Root() {
  console.log("Built by Bae");

  return (
    <>
      <Nav />
      <Outlet />
      <Banner />
    </>
  );
}

export default Root;
