import { useData } from "../contexts/DataContext";

import styles from "./Price.module.css";

function Price({ type, data }) {
  const { currentProduct } = useData();

  const style = type === "shopping-cart" ? { textAlign: "left" } : {};

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

  if (regularPrice)
    return (
      <div className={styles.price} style={style}>
        {regularPrice}
      </div>
    );

  if (originalPrice && discountedPrice)
    return (
      <div className={styles.price} style={style}>
        <span className={styles.originalPrice}>{originalPrice}</span>
        <span className="currentPrice">{discountedPrice}</span>
      </div>
    );
}

export default Price;
