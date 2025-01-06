import { useLocation, useNavigate } from "react-router-dom";
import propTypes from "prop-types";

import PageNumbering from "./PageNumbering";
import styles from "./Pagination.module.scss";

function Pagination({ totalPage, currentPage }) {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const updatedSearch = new URLSearchParams(search);

  function handleGoBack() {
    if (currentPage > 1) {
      updatedSearch.set("page", currentPage - 1);
      navigate(`?${updatedSearch}`);
    }
  }

  function handleGoForward() {
    if (currentPage !== totalPage) {
      updatedSearch.set("page", currentPage + 1);
      navigate(`?${updatedSearch}`);
    }
  }

  return (
    <div
      className={totalPage ? styles.pagination : `${styles.pagination} hidden`}
    >
      <button
        className={styles.btnArrow}
        onClick={handleGoBack}
        disabled={currentPage === 1 ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={
            totalPage === 1 || currentPage === 1
              ? styles.iconHidden
              : styles.iconArrow
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <PageNumbering
        pathName={pathname}
        totalPage={totalPage}
        currentPage={currentPage}
      />
      <button
        className={styles.btnArrow}
        onClick={handleGoForward}
        disabled={currentPage === totalPage ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={
            totalPage === currentPage ? styles.iconHidden : styles.iconArrow
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: propTypes.number,
  totalPage: propTypes.number,
};

export default Pagination;
