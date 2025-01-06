import propTypes from "prop-types";

import styles from "./BtnRemove.module.scss";

import { useCartItem } from "../contexts/CartItemContext";

function BtnRemove({ itemQuantity, id }) {
  const { cartDispatch } = useCartItem();

  function handleRemoveItem(quantity, id) {
    cartDispatch({ type: "cartItem/remove", payload: { quantity, id } });
  }

  return (
    <button
      className={styles.btnRemove}
      onClick={() => handleRemoveItem(itemQuantity, id)}
    >
      remove
    </button>
  );
}

BtnRemove.propTypes = {
  setCartCount: propTypes.func,
  setItemsInCart: propTypes.func,
  itemQuantity: propTypes.number,
  id: propTypes.string,
};

export default BtnRemove;
