import propTypes from "prop-types";

function BtnRemove({ setCount, setItemsInCart, itemQuantity, id }) {
  function handleRemoveItem(quantity, id) {
    setCount((num) => num - quantity);

    setItemsInCart((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  return (
    <button onClick={() => handleRemoveItem(itemQuantity, id)}>remove</button>
  );
}

BtnRemove.propTypes = {
  setCount: propTypes.func,
  setItemsInCarte: propTypes.func,
  itemQuantity: propTypes.number,
  id: propTypes.string,
};

export default BtnRemove;
