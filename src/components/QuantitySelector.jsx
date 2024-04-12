function QuantitySelector({ quantity, setQuantity }) {
  function handleSubtraction() {
    if (quantity === 0) return;
    setQuantity((num) => (num -= 1));
  }

  function handleAddition() {
    setQuantity((num) => (num += 1));
  }

  return (
    <div className="quantity-selector mt-20 ">
      <div>quantity</div>
      <span>{quantity}</span>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleAddition}>+</button>
    </div>
  );
}

export default QuantitySelector;
