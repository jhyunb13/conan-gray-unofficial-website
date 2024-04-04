import propTypes from "prop-types";

function Category({ children, setClick, setClickOther, setClickStore }) {
  function handleOpenMusic() {
    setClickStore(false);
    setClickOther(false);
    setClick((open) => !open);
  }

  return <span onClick={handleOpenMusic}>{children}</span>;
}

Category.propTypes = {
  children: propTypes.string,
};

export default Category;
