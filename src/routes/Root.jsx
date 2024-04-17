import Banner from "./Banner";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

console.log("Built by Bae");

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
