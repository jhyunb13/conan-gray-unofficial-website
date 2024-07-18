import { useData } from "../contexts/DataContext";

function Price() {
  const { currentProduct } = useData();
  const regularPrice = currentProduct.price;
  const originalPrice = currentProduct.originalPrice;
  const discountedPrice = currentProduct.currentPrice;

  return (
    <>
      {regularPrice && <div>{regularPrice}</div>}
      {originalPrice && (
        <div
          style={{
            textDecorationLine: "line-through",
            fontSize: "var(--text-xs)",
          }}
        >
          {originalPrice}
        </div>
      )}
      {discountedPrice && <div>{discountedPrice}</div>}
    </>
  );
}

export default Price;
