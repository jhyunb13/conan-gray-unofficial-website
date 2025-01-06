import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import propTypes from "prop-types";

function ScrollToTop({ children }) {
  const location = useLocation();
  const { productId } = useParams();

  useEffect(() => {
    if (productId) return;

    if (!location.hash) {
      document.querySelector("main").scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location, productId]);

  return <>{children}</>;
}

ScrollToTop.propTypes = {
  children: propTypes.string,
};

export default ScrollToTop;
