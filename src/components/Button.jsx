function Button({
  children,
  url,
  availability,
  setCount,
  setItemsInCart,
  quantity,
  correspondingData,
}) {
  function handleCounting() {
    setCount((num) => num + quantity);
    setItemsInCart((item) => {
      return [...item, { product: correspondingData, quantity: quantity }];
    });
  }

  return (
    <a className="no-link-style" href={url} target="_blank" rel="noopener">
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
