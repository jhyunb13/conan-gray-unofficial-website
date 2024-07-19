import propTypes from "prop-types";
import { useCartItem } from "../contexts/CartItemContext";

function BtnRemove({ itemQuantity, id }) {
  const { cartDispatch } = useCartItem();

  function handleRemoveItem(quantity, id) {
    cartDispatch({ type: "cartItem/remove", payload: { quantity, id } });
  }

  return (
    <button
      className="btn-remove-item"
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
