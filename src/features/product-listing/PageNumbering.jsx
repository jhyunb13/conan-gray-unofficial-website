import { useMemo } from "react";
import { Link } from "react-router-dom";
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
          className={currentPage === num ? styles.currentPage : styles.pageNum}
        >
          {num}
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
