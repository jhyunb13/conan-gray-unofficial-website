import propTypes from "prop-types";

function Table({ children, className }) {
  return <table className={className}>{children}</table>;
}

Table.propTypes = {
  className: propTypes.string,
  children: propTypes.arrayOf(propTypes.element),
};

export default Table;
