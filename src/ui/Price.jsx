import { useData } from "../contexts/DataContext";

import styles from "./Price.module.css";

function Price({ type, data }) {
  const { currentProduct } = useData();

  let regularPrice;
  let originalPrice;
  let discountedPrice;

  if (type === "product-listing" || type === "shopping-cart") {
    regularPrice = data.price;
    originalPrice = data.originalPrice;
    discountedPrice = data.currentPrice;
  } else {
    regularPrice = currentProduct.price;
    originalPrice = currentProduct.originalPrice;
    discountedPrice = currentProduct.currentPrice;
  }

  if (regularPrice) return <span>{regularPrice}</span>;

  if (originalPrice && discountedPrice)
    return (
      <div className={styles.discountPrice}>
        <span>{originalPrice}</span>
        <span>{discountedPrice}</span>
      </div>
    );
}

export default Price;
