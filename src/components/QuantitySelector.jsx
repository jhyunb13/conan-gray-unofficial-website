function QuantitySelector({
  quantity,
  count,
  availability,
  setQuantity,
  setItemsInCart,
  setCount,
  children,
  title,
}) {
  function handleSubtraction(itemTitle) {
    if (!itemTitle && !availability) {
      if (quantity === 0) return;
      setQuantity((num) => (num -= 1));
    }

    if (itemTitle) {
      setItemsInCart((items) => {
        return items.map((item) => {
          if (item.product.title === itemTitle) {
            if (item.quantity === 0) return item;
            else return { ...item, quantity: item.quantity - 1 };
          } else return item;
        });
      });

      if (!count) return;
      setCount((num) => num - 1);
    }
  }

  function handleAddition(itemTitle) {
    if (!itemTitle && !availability) setQuantity((num) => (num += 1));

    if (itemTitle) {
      setItemsInCart((items) => {
        return items.map((item) => {
          if (item.product.title === itemTitle) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      });

      setCount((num) => num + 1);
    }
  }

  return (
    <div>
      <button
        onClick={() => handleSubtraction(title)}
        className={
          availability ? "quantity-btn inactive" : "quantity-btn active"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70%"
          height="70%"
          fill="currentColor"
          className="bi bi-dash-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
          />
        </svg>
      </button>
      <span>{children}</span>
      <button
        onClick={() => handleAddition(title)}
        className={
          availability ? "quantity-btn inactive" : "quantity-btn active"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70%"
          height="70%"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
          />
        </svg>
      </button>
    </div>
  );
}

export default QuantitySelector;
