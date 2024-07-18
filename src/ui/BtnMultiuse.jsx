import propTypes from "prop-types";
import { Link } from "react-router-dom";

import { useData } from "../contexts/DataContext";
import { convertUpperCase } from "../utils/helpers";

function BtnMultiuse({ children, url, onClick, classForBtn, type }) {
  const { soldOut } = useData();

  const newParam = new URLSearchParams([["page", "1"]]).toString();

  if (type === "empty-cart")
    return (
      <div className={classForBtn}>
        <Link to={`/store?${newParam}`}>
          <button className="button mt-20 ">
            {convertUpperCase(`Continue Shopping`)}
          </button>
        </Link>
      </div>
    );

  if (type === "sold-out" && soldOut)
    return (
      <div className={classForBtn}>
        <button className="button not-allowed" disabled onClick={onClick}>
          {children}
        </button>
      </div>
    );

  if ((type === "add-to-cart" && !soldOut) || type === "checkout")
    return (
      <div className={classForBtn}>
        <button className="button" onClick={onClick}>
          {children}
        </button>
      </div>
    );

  if (type === "tour-ticket" || type === "notification")
    return (
      <div className={classForBtn}>
        <a href={url} target="_blank" rel="noopener" className="no-link-style">
          <button className="button" onClick={onClick}>
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
