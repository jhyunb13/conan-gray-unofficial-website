import propTypes from "prop-types";

import styles from "./AlertNoResult.module.css";

function AlertNoResult({ children, type }) {
  return (
    <h1
      className={type === "no-results" ? styles.noResults : styles.emptyCart}
      style={{ textTransform: "capitalize", textAlign: "center" }}
    >
      {children}
    </h1>
  );
}

AlertNoResult.propTypes = {
  children: propTypes.string,
  dataAvail: propTypes.number,
};

export default AlertNoResult;
