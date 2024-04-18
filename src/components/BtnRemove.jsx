function BtnRemove({
  setCount,
  setItemsInCart,
  itemTitle,
  itemQuantity,
  itemSize,
  number,
}) {
  function handleRemoveItem(title, quantity, size, num) {
    setCount((num) => num - quantity);

    setItemsInCart((items) => {
      let result;

      return items.filter((item, i) => {
        if (size) {
          if (item.product.title === title && item.size === size) {
            if (item.quantity === quantity) return (result = i !== num);
            else return (result = item.quantity !== quantity);
          }
          if (item.product.title === title && item.size !== size)
            result = item.size !== size;
          else result = item.product.title !== title;
        } else {
          if (item.product.title === title) {
            if (item.quantity === quantity) return (result = i !== num);
            else return (result = item.quantity !== quantity);
          } else result = item.product.title !== title;
        }

        return result;
      });
    });
  }

  return (
    <button
      onClick={() =>
        handleRemoveItem(itemTitle, itemQuantity, itemSize, number)
      }
    >
      remove
    </button>
  );
}

export default BtnRemove;
