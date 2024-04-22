import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Pagination({ totalPage, pageNumbers, pathName, currentParam }) {
  function handleScrollToTop() {
    // window.scrollTo(0, 0);
    document.querySelector(".store-page").scrollIntoView();
  }

  return (
    <div className={totalPage ? "pagination" : "pagination hidden"}>
      <Link
        to={`${pathName}?page=${currentParam - 1}`}
        onClick={handleScrollToTop}
      >
        <button disabled={currentParam === 1 ? true : false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className={
              totalPage === 1 || currentParam === 1
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
      </Link>
      {pageNumbers.map((num) => (
        <Link
          to={`${pathName}?page=${num}`}
          key={num}
          onClick={handleScrollToTop}
        >
          <button
            className={currentParam === num ? "active-page" : "inactive-page"}
          >
            {num}
          </button>
        </Link>
      ))}
      <Link
        to={`${pathName}?page=${currentParam + 1}`}
        onClick={currentParam !== totalPage && handleScrollToTop}
      >
        <button disabled={currentParam === totalPage ? true : false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className={
              totalPage === currentParam
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
      </Link>
    </div>
  );
}

Pagination.propTypes = {
  pathName: propTypes.string,
  currentParam: propTypes.number,
  totalPage: propTypes.number,
  pageNumbers: propTypes.array,
  scrollToTop: propTypes.func,
};

export default Pagination;
