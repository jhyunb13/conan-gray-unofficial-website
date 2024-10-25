import propTypes from "prop-types";

import styles from "./SelectorSize.module.css";

import { useCartItem } from "../../contexts/CartItemContext";
import { useData } from "../../contexts/DataContext";

const SIZE_OPTIONS = ["S", "M", "L", "XL", "2XL"];

function SelectorSize() {
  const { currentProduct, soldOut } = useData();
  const { sizeSelected, cartDispatch } = useCartItem();

  const optionSoldOutEl = SIZE_OPTIONS.map((option) => (
    <label className={styles.optionUnavail} key={`${option}-soldout`}>
      <input
        type="radio"
        name="size"
        value={option}
        onClick={handleSizeSelection}
        defaultChecked={option === "S"}
      />
      {option}
    </label>
  ));

  const optionDefaultEl = SIZE_OPTIONS.map((option) => (
    <label
      className={
        sizeSelected === option ? styles.optionSelected : "optionAvail"
      }
      key={`${option}-avail`}
    >
      <input
        type="radio"
        name="size"
        value={option}
        onClick={handleSizeSelection}
        defaultChecked={option === "S"}
      />
      {option}
    </label>
  ));

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
      <form className={styles.sizeSelector}>
        <div className={styles.name}>Size</div>
        <div className={styles.sizeOptions}>
          {soldOut ? optionSoldOutEl : optionDefaultEl}
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
