import { Outlet, useLocation } from "react-router-dom";

import Footer from "../ui/Footer";
import ScrollToTop from "../ui/ScrollToTop";
import styles from "./NestedLayout.module.css";

function NestedLayout() {
  const { pathname } = useLocation();

  const style = { display: "block" };

  return (
    <main
      className={styles.main}
      style={pathname.includes("videos") ? style : {}}
    >
      <Outlet />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default NestedLayout;
