import Banner from "./Banner";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

console.log("Built by Bae");

function Root() {
  const nav = [
    { category: "Home", link: `/` },
    { category: "listen", link: `listen` },
    { category: "videos", link: `videos` },
    { category: "tour", link: `tour` },
    { category: "store", link: `store` },
  ];

  return (
    <>
      <Nav navList={nav} />
      <Outlet />
      <Banner />
    </>
  );
}

export default Root;
