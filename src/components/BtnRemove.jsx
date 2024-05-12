import propTypes from "prop-types";

function BtnRemove({ setCartCount, setItemsInCart, itemQuantity, id }) {
  function handleRemoveItem(quantity, id) {
    setCartCount((num) => num - quantity);
    setItemsInCart((items) => items.filter((item) => item.id !== id));
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
