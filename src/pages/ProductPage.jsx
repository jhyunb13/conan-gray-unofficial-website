import { useEffect } from "react";
import { useParams } from "react-router-dom";

import SelectorQuantity from "../features/product-page/SelectorQuantity";
import SelectorSize from "../features/product-page/SelectorSize";
import BtnMultiuse from "../ui/BtnMultiuse";
import Price from "../ui/Price";
import Description from "../ui/Description";
import Footer from "../ui/Footer";
import styles from "./ProductPage.module.css";

import { useData } from "../contexts/DataContext";
import { useCartItem } from "../contexts/CartItemContext";
import { convertUpperCase } from "../utils/helpers";

function ProductPage() {
  const { quantity, cartDispatch } = useCartItem();
  const { currentProduct, soldOut, dataDispatch } = useData();
  const { productId } = useParams();

  const itemImage = currentProduct?.img;
  const itemName = currentProduct?.title;

  function handleSubtraction() {
    if (soldOut) return;
    if (quantity <= 1) return;
    cartDispatch({ type: "quantity/subtract" });
  }

  function handleAddition() {
    if (soldOut) return;
    cartDispatch({ type: "quantity/add" });
  }

  function handleAddToCart() {
    cartDispatch({ type: "item/add", payload: currentProduct });
  }

  useEffect(() => {
    cartDispatch({ type: "size-quantity/reset" });
    dataDispatch({ type: "product/matching", payload: productId });
  }, [cartDispatch, dataDispatch, productId]);

  if (currentProduct)
    return (
      <main className={styles.productDetailPage}>
        <div className={styles.imgContainer}>
          <img src={`https:${itemImage}`} alt={itemName} />
        </div>
        <div className={styles.productDetail}>
          <div className={styles.detailContainer}>
            <div>
              <h1>{itemName}</h1>
              <Price />
            </div>
            <SelectorSize />
            <SelectorQuantity
              type="productPage"
              handleSubtraction={handleSubtraction}
              handleAddition={handleAddition}
            >
              {quantity}
            </SelectorQuantity>
            <BtnMultiuse type="sold-out">
              {convertUpperCase(soldOut)}
            </BtnMultiuse>
            <BtnMultiuse type="add-to-cart" onClick={handleAddToCart}>
              {convertUpperCase(`Add To Cart`)}
            </BtnMultiuse>
            <Description />
          </div>
          <Footer />
        </div>
      </main>
    );
}

export default ProductPage;
