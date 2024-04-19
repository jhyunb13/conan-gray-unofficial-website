import propTypes from "prop-types";

function BtnMultiuse({ children, url, availability, handleBtnClick }) {
  return (
    <a href={url} target="_blank" rel="noopener" className="no-link-style">
      <button
        className="button"
        disabled={availability ? true : false}
        onClick={handleBtnClick}
      >
        {children}
      </button>
    </a>
  );
}

BtnMultiuse.propTypes = {
  children: propTypes.string,
  url: propTypes.string,
  availability: propTypes.string,
  handleBtnClick: propTypes.func,
};

export default BtnMultiuse;
