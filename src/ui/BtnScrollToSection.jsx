import propTypes from "prop-types";

import styles from "./BtnScrollToSection.module.css";

function BtnScrollToSection({ textContent, element }) {
  function handleScrollTo() {
    element.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  return (
    <button className={styles.btn} onClick={handleScrollTo}>
      <h2>{textContent}</h2>
    </button>
  );
}

BtnScrollToSection.propTypes = {
  textContent: propTypes.string,
  section: propTypes.string,
  element: propTypes.object,
};

export default BtnScrollToSection;
