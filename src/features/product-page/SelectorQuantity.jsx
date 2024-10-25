import propTypes from "prop-types";

import styles from "./SelectorQuantity.module.css";
import sharedStyles from "../../styles/SharedStyles.module.css";

import { useData } from "../../contexts/DataContext";

function SelectorQuantity({
  type,
  id,
  children,
  handleSubtraction,
  handleAddition,
}) {
  const { soldOut } = useData();

  const styleContainer = {
    justifyContent: "center",
    gap: "8px",
  };

  const styleBtn = {
    background: "var(--color-bg-secondary)",
    width: "24px",
    height: "24px",
  };

  return (
    <div className={styles.quantityContainer}>
      {type === "productPage" && <div className={styles.name}>Quantity</div>}
      <div
        className={styles.quantitySelector}
        style={type === "shopping-cart" ? styleContainer : {}}
      >
        <button
          onClick={() => handleSubtraction(id)}
          className={soldOut ? sharedStyles.inactive : styles.btnQuantity}
          style={type === "shopping-cart" ? styleBtn : {}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={
              type === "shopping-cart" ? styles.iconSmall : styles.icon
            }
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <div>{children}</div>
        <button
          onClick={() => handleAddition(id)}
          className={soldOut ? sharedStyles.inactive : styles.btnQuantity}
          style={type === "shopping-cart" ? styleBtn : {}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={
              type === "shopping-cart" ? styles.iconSmall : styles.icon
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

SelectorQuantity.propTypes = {
  id: propTypes.string,
  soldOut: propTypes.string,
  children: propTypes.number,
  handleSubtraction: propTypes.func,
  handleAddition: propTypes.func,
  type: propTypes.string,
};

export default SelectorQuantity;
