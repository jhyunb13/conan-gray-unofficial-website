import propTypes from "prop-types";

function BtnMultiuse({
  children,
  url,
  availability,
  handleBtnClick,
  classForBtn,
}) {
  return (
    <div className={classForBtn}>
      <a href={url} target="_blank" rel="noopener" className="no-link-style">
        <button
          className="button"
          disabled={availability ? true : false}
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
  availability: propTypes.string,
  handleBtnClick: propTypes.func,
  classForBtn: propTypes.string,
};

export default BtnMultiuse;
