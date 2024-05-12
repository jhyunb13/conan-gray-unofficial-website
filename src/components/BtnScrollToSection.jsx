import propTypes from "prop-types";

function BtnScrollToSection({ name, section }) {
  function handleScrollTo(elementId) {
    document
      .querySelector(`#${elementId}`)
      .scrollIntoView({ block: "start", behavior: "auto" });
  }

  return (
    <button onClick={() => handleScrollTo(section)}>
      <h1>{name}</h1>
    </button>
  );
}

BtnScrollToSection.propTypes = {
  name: propTypes.string,
  section: propTypes.string,
};

export default BtnScrollToSection;
