import { Link } from "react-router-dom";
import propTypes from "prop-types";

import Badge from "../../ui/Badge";
import styles from "./Product.module.css";

import { convertUpperCase, generateParams } from "../../utils/helpers";
import { useCartItem } from "../../contexts/CartItemContext";
import { useData } from "../../contexts/DataContext";

function Product({ productData }) {
  const { cartDispatch } = useCartItem();
  const { dataDispatch } = useData();

  const itemName = productData.title;
  const regularPrice = productData.price;
  const originalPrice = productData.originalPrice;
  const discountedPrice = productData.currentPrice;
  const soldOut = productData.soldOut;
  const extraInfo = productData.status;

  const urlParam = generateParams(itemName);

  function handleProductClick() {
    cartDispatch({ type: "size-quantity/reset" });
    dataDispatch({ type: "product/matching", payload: urlParam });
  }

  return (
    <li
      className={styles.productCard}
      style={{ display: "flex", justifyContent: "center", alignItem: "center" }}
      onClick={handleProductClick}
    >
      <Link
        to={`products/${urlParam}`}
        className={`${styles.product} no-link-style`}
      >
        <div className={styles.productImgContainer}>
          <img src={`https:${productData.img}`} alt={itemName} loading="lazy" />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productTitlePrice}>
            <div>{convertUpperCase(itemName)}</div>
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
          </div>
          <div>
            {soldOut && <Badge>{convertUpperCase(soldOut)}</Badge>}
            {discountedPrice && <Badge>{convertUpperCase("sale")}</Badge>}
            {extraInfo && <Badge>{convertUpperCase(extraInfo)}</Badge>}
          </div>
        </div>
      </Link>
    </li>
  );
}

Product.propTypes = {
  productData: propTypes.object,
};

export default Product;
