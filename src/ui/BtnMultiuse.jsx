import propTypes from "prop-types";
import { useData } from "../contexts/DataContext";

function BtnMultiuse({ children, url, onClick, classForBtn }) {
  const { soldOut } = useData();

  return (
    <div className={classForBtn}>
      <a href={url} target="_blank" rel="noopener" className="no-link-style">
        <button
          className={soldOut ? "button not-allowed" : "button"}
          disabled={soldOut ? true : false}
          onClick={onClick}
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
  onClick: propTypes.func,
  classForBtn: propTypes.string,
};

export default BtnMultiuse;
