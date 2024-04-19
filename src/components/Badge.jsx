import propTypes from "prop-types";

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

Badge.propTypes = {
  children: propTypes.string,
};

export default Badge;
