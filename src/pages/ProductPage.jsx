import { useEffect } from "react";
import { useParams } from "react-router-dom";

import SelectorQuantity from "../features/product-page/SelectorQuantity";
import SelectorSize from "../features/product-page/SelectorSize";
import BtnMultiuse from "../ui/BtnMultiuse";
import Price from "../ui/Price";
import Description from "../ui/Description";
import styles from "./ProductPage.module.css";

import { useData } from "../contexts/DataContext";
import { useCartItem } from "../contexts/CartItemContext";
import { convertUpperCase } from "../utils/helpers";

function ProductPage() {
  const { quantity, dispatch } = useCartItem();
  const { currentProduct, soldOut, dispatch: dataDispatch } = useData();
  const { productId } = useParams();

  const itemImage = currentProduct.img;
  const itemName = currentProduct.title;
  const footerStyle = { position: "relative", top: "80px" };

  function handleSubtraction() {
    if (soldOut) return;
    if (quantity <= 1) return;
    dispatch({ type: "quantity/subtract" });
  }

  function handleAddition() {
    if (soldOut) return;
    dispatch({ type: "quantity/add" });
  }

  function handleAddToCart() {
    dispatch({ type: "item/add", payload: currentProduct });
  }

  useEffect(() => {
    dispatch({ type: "reset" });
    dataDispatch({ type: "product/matching", payload: productId });
  }, [dispatch, dataDispatch, productId]);

  if (currentProduct)
    return (
      <main
        className={`${styles.productDetailPage} grid-2-col-lg grid-1-col-md`}
      >
        <div className={styles.imgContainer}>
          <img src={`https:${itemImage}`} alt={itemName} />
        </div>
        <div className={styles.productDetail}>
          <h1>{itemName}</h1>
          <Price />
          <SelectorSize />
          <div className="quantity-selector mt-20 ">
            <div className="selector-title">Quantity</div>
            <SelectorQuantity
              handleSubtraction={handleSubtraction}
              handleAddition={handleAddition}
            >
              {quantity}
            </SelectorQuantity>
          </div>
          <BtnMultiuse classForBtn="btn-add-item" type="sold-out">
            {convertUpperCase(soldOut)}
          </BtnMultiuse>
          <BtnMultiuse
            onClick={handleAddToCart}
            classForBtn="btn-add-item"
            type="add-to-cart"
          >
            {convertUpperCase(`Add To Cart`)}
          </BtnMultiuse>
          <Description />
        </div>
      </main>
    );
}

export default ProductPage;
