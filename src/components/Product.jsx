import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Badge from "./Badge";
import styles from "./Product.module.css";

function Product({ productData }) {
  const urlParam = productData.title
    .toLowerCase()
    .replace("(", "")
    .replace(")", "")
    .split(" ")
    .join("-");

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.product}>
      <Link
        to={`${currentPath}/products/${urlParam}`}
        className="no-link-style"
      >
        <div className={styles.productImgContainer}>
          <img src={`https:${productData.img}`} alt={productData.title} />
        </div>
        <div className={styles.productInfo}>
          <div>
            {productData.status && (
              <Badge>{productData.status.toUpperCase()}</Badge>
            )}

            {productData.soldOut && (
              <Badge>{productData.soldOut.toUpperCase()}</Badge>
            )}
          </div>
          <div className={styles.productTitlePrice}>
            <div>{productData.title}</div>
            <div>{productData.price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Product.propTypes = {
  productData: propTypes.object,
};

export default Product;
