import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Badge from "./Badge";

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
    <div className="product">
      <Link
        to={`${currentPath}/products/${urlParam}`}
        className="no-link-style"
      >
        <div className="product-img-container">
          <img src={`https:${productData.img}`} alt={productData.title} />
        </div>
        <div className="product-info">
          <div>
            {productData.status && (
              <Badge>{productData.status.toUpperCase()}</Badge>
            )}

            {productData.soldOut && (
              <Badge>{productData.soldOut.toUpperCase()}</Badge>
            )}
          </div>
          <div className="product-title-price">
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
