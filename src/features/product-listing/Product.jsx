import { Link } from "react-router-dom";
import propTypes from "prop-types";

import Badge from "../../ui/Badge";
import styles from "./Product.module.css";

import { convertUpperCase, generateParams } from "../../utils/helpers";
import { useCartItem } from "../../contexts/CartItemContext";
import { useData } from "../../contexts/DataContext";

function Product({ productData }) {
  const { dispatch } = useCartItem();
  const { dispatch: dataDispatch } = useData();

  const urlParam = generateParams(productData.title);

  function handleProductClick() {
    dispatch({ type: "reset" });
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
          <img
            src={`https:${productData.img}`}
            alt={productData.title}
            loading="lazy"
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productTitlePrice}>
            <div>{convertUpperCase(productData.title)}</div>
            {productData.price && <div>{productData.price}</div>}
            {productData.originalPrice && (
              <div
                style={{
                  textDecorationLine: "line-through",
                  fontSize: "var(--text-xs)",
                }}
              >
                {productData.originalPrice}
              </div>
            )}
            {productData.currentPrice && <div>{productData.currentPrice}</div>}
          </div>
          <div>
            {productData.status && (
              <Badge>{convertUpperCase(productData.status)}</Badge>
            )}
            {productData.soldOut && (
              <Badge>{convertUpperCase(productData.soldOut)}</Badge>
            )}
            {productData.originalPrice && (
              <Badge>{convertUpperCase("sale")}</Badge>
            )}
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
