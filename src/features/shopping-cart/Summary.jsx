import propTypes from "prop-types";

import styles from "./Summary.module.css";

function Summary({ children, headers }) {
  if (headers)
    return (
      <div className={styles.summary}>
        <div className={styles.headers}>
          {headers.map((item) => (
            <div className={styles.header} key={item}>
              {item}
            </div>
          ))}
        </div>
        {children}
      </div>
    );
}

Summary.propTypes = {
  category: propTypes.array,
};

export default Summary;
