import propTypes from "prop-types";

import styles from "./Badge.module.scss";

function Badge({ children }) {
  return <div className={styles.badge}>{children}</div>;
}

Badge.propTypes = {
  children: propTypes.string,
};

export default Badge;
