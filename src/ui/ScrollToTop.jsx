import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import propTypes from "prop-types";

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    !location.hash ? window.scrollTo(0, 0) : "";
  }, [location]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return <>{children}</>;
}

ScrollToTop.propTypes = {
  children: propTypes.string,
};

export default ScrollToTop;
