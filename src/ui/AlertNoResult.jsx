import propTypes from "prop-types";

import styles from "./AlertNoResult.module.scss";

function AlertNoResult({ children, type }) {
  return (
    <div
      className={type === "no-results" ? styles.noResults : styles.emptyCart}
    >
      {children}
    </div>
  );
}

AlertNoResult.propTypes = {
  children: propTypes.string,
  type: propTypes.string,
};

export default AlertNoResult;
