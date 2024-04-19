import propTypes from "prop-types";

function AlertNoResult({ children }) {
  return <h1>{children}</h1>;
}

AlertNoResult.propTypes = {
  children: propTypes.string,
};

export default AlertNoResult;
