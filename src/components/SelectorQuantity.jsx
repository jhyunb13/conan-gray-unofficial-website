import propTypes from "prop-types";

function SelectorQuantity({
  id,
  availability,
  children,
  handleSubtraction,
  handleAddition,
}) {
  return (
    <div>
      <button
        onClick={() => handleSubtraction(id)}
        className={
          availability ? "btn-quantity inactive" : "btn-quantity active"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70%"
          height="70%"
          fill="currentColor"
          className="bi bi-dash-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
          />
        </svg>
      </button>
      <span>{children}</span>
      <button
        onClick={() => handleAddition(id)}
        className={
          availability ? "btn-quantity inactive" : "btn-quantity active"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70%"
          height="70%"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
          />
        </svg>
      </button>
    </div>
  );
}

SelectorQuantity.propTypes = {
  id: propTypes.string,
  availability: propTypes.string,
  children: propTypes.number,
  handleSubtraction: propTypes.func,
  handleAddition: propTypes.func,
};

export default SelectorQuantity;
