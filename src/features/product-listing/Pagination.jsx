import { useLocation, useNavigate } from "react-router-dom";
import propTypes from "prop-types";

import PageNumbering from "./PageNumbering";
import styles from "./Pagination.module.css";

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
        disabled={currentPage === 1 ? true : false}
        onClick={handleGoBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className={
            totalPage === 1 || currentPage === 1
              ? "bi bi-arrow-left inactive-page"
              : "bi bi-arrow-left active-page"
          }
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </button>
      <PageNumbering
        pathName={pathname}
        totalPage={totalPage}
        currentPage={currentPage}
      />
      <button
        disabled={currentPage === totalPage ? true : false}
        onClick={handleGoForward}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className={
            totalPage === currentPage
              ? "bi bi-arrow-left inactive-page"
              : "bi bi-arrow-left active-page"
          }
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
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
