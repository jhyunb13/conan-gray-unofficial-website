function Button({
  children,
  availability,
  setCount,
  setItemsInCart,
  quantity,
  correspondingData,
  sizeSelected,
}) {
  function handleCounting() {
    setCount((num) => num + quantity);
    setItemsInCart((item) => {
      return [
        ...item,
        { product: correspondingData, size: sizeSelected, quantity },
      ];
    });
  }

  return (
    <button
      className="button"
      disabled={availability ? true : false}
      onClick={handleCounting}
    >
      {children}
    </button>
  );
}

export default Button;
