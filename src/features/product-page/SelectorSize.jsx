import propTypes from "prop-types";

import styles from "./SelectorSize.module.css";

import { useCartItem } from "../../contexts/CartItemContext";
import { useData } from "../../contexts/DataContext";

const SIZE_OPTIONS = ["S", "M", "L", "XL", "2XL"];

function SelectorSize() {
  const { currentProduct, soldOut } = useData();
  const { sizeSelected, cartDispatch } = useCartItem();

  function handleSizeSelection(e) {
    cartDispatch({ type: "size/select", payload: e.target.value });
  }

  if (
    currentProduct.title.includes("TEE") ||
    currentProduct.title.includes("SWEATER") ||
    currentProduct.title.includes("HOODIE") ||
    currentProduct.title.includes("PULLOVER")
  )
    return (
      <form className={`${styles.sizeSelector} mt-20`}>
        <div className="selector-title">Size</div>
        <div className={styles.size}>
          {SIZE_OPTIONS.map((option) => {
            return (
              <div id={`size-${option}`} key={option}>
                {soldOut ? (
                  <label
                    className={`${styles.sizeOption} inactive`}
                    key={`${option}-inactive`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={option}
                      onClick={handleSizeSelection}
                      defaultChecked={option === "S"}
                    />
                    <div>{option}</div>
                  </label>
                ) : (
                  <label
                    className={
                      sizeSelected === option
                        ? `${styles.sizeOption} ${styles.sizeSelected}`
                        : styles.sizeOption
                    }
                    key={`${option}-active`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={option}
                      onClick={handleSizeSelection}
                      defaultChecked={option === "S"}
                    />
                    <div>{option}</div>
                  </label>
                )}
              </div>
            );
          })}
        </div>
      </form>
    );
}

SelectorSize.propTypes = {
  soldOut: propTypes.string,
  sizeSelected: propTypes.string,
  setSizeSelected: propTypes.func,
  currentProduct: propTypes.object,
};

export default SelectorSize;
