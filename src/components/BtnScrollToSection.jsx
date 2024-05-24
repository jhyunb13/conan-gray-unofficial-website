import propTypes from "prop-types";

function BtnScrollToSection({ textContent, element }) {
  function handleScrollTo() {
    element.current.scrollIntoView({ block: "start", behavior: "auto" });
  }

  return (
    <button onClick={handleScrollTo}>
      <h1>{textContent}</h1>
    </button>
  );
}

BtnScrollToSection.propTypes = {
  textContent: propTypes.string,
  section: propTypes.string,
  element: propTypes.object,
};

export default BtnScrollToSection;
