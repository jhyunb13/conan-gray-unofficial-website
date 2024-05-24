import { Link } from "react-router-dom";
import { useMemo } from "react";
import propTypes from "prop-types";
import styles from "./PageNumbering.module.css";

function PageNumbering({
  pathName,
  totalPage,
  handleScrollToTop,
  currentPage,
}) {
  const pageNumbers = useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalPage; i++) arr.push(i + 1);
    return arr;
  }, [totalPage]);

  return (
    <>
      {pageNumbers.map((num) => (
        <Link
          to={`${pathName}?page=${num}`}
          key={num}
          onClick={handleScrollToTop}
        >
          <button
            className={currentPage === num ? "active-page" : "inactive-page"}
          >
            {num}
          </button>
        </Link>
      ))}
    </>
  );
}

PageNumbering.propTypes = {
  pathName: propTypes.string,
  currentPage: propTypes.number,
  totalPage: propTypes.number,
  handleScrollToTop: propTypes.func,
};

export default PageNumbering;
