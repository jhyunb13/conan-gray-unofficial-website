import propTypes from "prop-types";

function Filter({ children, setClick }) {
  function handleClick() {
    setClick((on) => !on);
  }

  return <span onClick={handleClick}>{children}</span>;
}

Filter.propTypes = {
  children: propTypes.string,
};

export default Filter;
