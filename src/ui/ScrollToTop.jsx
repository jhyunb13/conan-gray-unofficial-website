import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import propTypes from "prop-types";

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      document.querySelector("main").scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  return <>{children}</>;
}

ScrollToTop.propTypes = {
  children: propTypes.string,
};

export default ScrollToTop;
