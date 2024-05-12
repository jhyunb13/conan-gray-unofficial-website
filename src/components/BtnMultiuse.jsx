import propTypes from "prop-types";

function BtnMultiuse({ children, url, soldOut, handleBtnClick, classForBtn }) {
  return (
    <div className={classForBtn}>
      <a href={url} target="_blank" rel="noopener" className="no-link-style">
        <button
          className={soldOut ? "button not-allowed" : "button"}
          disabled={soldOut ? true : false}
          onClick={handleBtnClick}
        >
          {children}
        </button>
      </a>
    </div>
  );
}

BtnMultiuse.propTypes = {
  children: propTypes.string,
  url: propTypes.string,
  soldOut: propTypes.string,
  handleBtnClick: propTypes.func,
  classForBtn: propTypes.string,
};

export default BtnMultiuse;
