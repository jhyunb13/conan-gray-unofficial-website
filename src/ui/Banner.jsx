import { useLocation } from "react-router-dom";

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

  return (
    <footer id="info-banner" style={style}>
      {infoText}
    </footer>
  );
}

export default Banner;
