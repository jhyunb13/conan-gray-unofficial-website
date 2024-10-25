import { useLocation } from "react-router-dom";

import styles from "./Banner.module.css";

function Banner() {
  const { pathname } = useLocation();

  const infoText = [];
  const style =
    pathname === "/"
      ? {
          color: "var(--color-text)",
          backgroundColor: "var(--color-background)",
        }
      : {};

  for (let i = 0; i < 10; i++) {
    infoText.push(
      <span key={i}>Conan Gray&apos;s fan-made unofficial website</span>
    );
  }

  return <footer className={styles.banner}>{infoText}</footer>;
}

export default Banner;
