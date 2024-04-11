import { Link } from "react-router-dom";

function Pagination({ pageNumbers, pathName, currentParam, scrollToTop }) {
  return (
    <div className="pagination mt-20">
      {currentParam > 1 && (
        <Link to={`${pathName}?page=${currentParam - 1}`}>
          <button onClick={scrollToTop}>back</button>
        </Link>
      )}
      {pageNumbers.map((num) => (
        <span
          className={currentParam === num ? "current-page" : "inactive-page"}
          key={num}
        >
          {num}
        </span>
      ))}
      {pageNumbers.length > 1 && (
        <Link to={`${pathName}?page=${currentParam + 1}`}>
          <button onClick={scrollToTop}>forward</button>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
