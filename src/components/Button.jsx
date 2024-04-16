function Button({
  children,
  url,
  availability,
  setCount,
  setItemsInCart,
  quantity,
  correspondingData,
  sizeSelected,
}) {
  function handleCounting() {
    if (url) return;
    setCount((num) => num + quantity);
    setItemsInCart((item) => {
      return [
        ...item,
        { product: correspondingData, size: sizeSelected, quantity },
      ];
    });
  }

  return (
    <a href={url} target="_blank" rel="noopener" className="no-link-style">
      <button
        className="button"
        disabled={availability ? true : false}
        onClick={handleCounting}
      >
        {children}
      </button>
    </a>
  );
}

export default Button;
