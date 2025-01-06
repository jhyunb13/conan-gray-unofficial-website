import { Outlet, useLocation } from "react-router-dom";

import InfoLinks from "../ui/InfoLinks";
import styles from "./NestedLayout.module.scss";

function NestedLayout() {
  const { pathname } = useLocation();

  const style = { display: "block" };

  return (
    <main
      className={styles.main}
      style={pathname.includes("videos") ? style : {}}
    >
      <Outlet />
      <InfoLinks />
    </main>
  );
}

export default NestedLayout;
