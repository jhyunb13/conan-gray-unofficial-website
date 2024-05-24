import propTypes from "prop-types";

function AlertNoResult({ children, dataAvail }) {
  if (dataAvail) return;

  if (!dataAvail) return <h1>{children}</h1>;
}

AlertNoResult.propTypes = {
  children: propTypes.string,
  dataAvail: propTypes.number,
};

export default AlertNoResult;
