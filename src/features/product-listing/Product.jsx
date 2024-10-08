import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import propTypes from "prop-types";

import Badge from "../../ui/Badge";
import Price from "../../ui/Price";
import styles from "./Product.module.css";

import { convertUpperCase, generateParams } from "../../utils/helpers";
import { useCartItem } from "../../contexts/CartItemContext";
import { useData } from "../../contexts/DataContext";

function Product({ productData }) {
  const { cartDispatch } = useCartItem();
  const { dataDispatch } = useData();
  const productImageEl = useRef(null);

  const itemName = productData.title;
  const itemImage = productData.img;
  const discountedPrice = productData.currentPrice;
  const soldOut = productData.soldOut;
  const extraInfo = productData.status;

  const urlParam = generateParams(itemName);

  function handleProductClick() {
    cartDispatch({ type: "size-quantity/reset" });
    dataDispatch({ type: "product/matching", payload: urlParam });
  }

  useEffect(() => {
    function imageLoading(entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }

    const imgObserver = new IntersectionObserver(imageLoading, {
      root: null,
      threshold: 0.1,
    });

    imgObserver.observe(productImageEl.current);
  }, []);

  return (
    <li
      className={styles.productCard}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      onClick={handleProductClick}
    >
      <Link
        to={`products/${urlParam}`}
        className={`${styles.product} no-link-style`}
      >
        <div className={styles.productImgContainer}>
          <img
            src="https://fakeimg.pl/200x200/000000/000000"
            data-src={`https:${itemImage}`}
            alt={itemName}
            ref={productImageEl}
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productTitlePrice}>
            <div>{convertUpperCase(itemName)}</div>
            <Price type="product-listing" data={productData} />
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
