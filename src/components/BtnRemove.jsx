function BtnRemove({ setCount, setItemsInCart, itemTitle, itemQuantity }) {
  function handleRemoveItem(selectedItem, quantity) {
    setCount((num) => num - quantity);

    setItemsInCart((items) => {
      return items.filter((item) => item.product.title !== selectedItem);
    });
  }

  return (
    <button onClick={() => handleRemoveItem(itemTitle, itemQuantity)}>
      remove
    </button>
  );
}

export default BtnRemove;
