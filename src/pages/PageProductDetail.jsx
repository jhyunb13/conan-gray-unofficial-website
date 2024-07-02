import { useEffect } from "react";
import { useParams } from "react-router-dom";

import SelectorQuantity from "../components/SelectorQuantity";
import SelectorSize from "../components/SelectorSize";
import BtnMultiuse from "../ui/BtnMultiuse";
import Footer from "../ui/Footer";
import styles from "./PageProductDetail.module.css";

import { useData } from "../contexts/DataContext";
import { useCartItem } from "../contexts/CartItemContext";
import { convertUpperCase } from "../utils/helpers";

function PageProductDetail() {
  const { quantity, dispatch } = useCartItem();
  const { currentProduct, soldOut, dispatch: dataDispatch } = useData();
  const { productId } = useParams();

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

  return (
    <>
      {currentProduct && (
        <main
          className={`${styles.productDetailPage} grid-2-col-lg grid-1-col-md`}
        >
          <div className={styles.imgContainer}>
            <img
              src={`https:${currentProduct.img}`}
              alt={currentProduct.title}
            />
          </div>
          <div className={styles.productDetail}>
            <h1>{currentProduct.title}</h1>
            <div>{currentProduct.price}</div>
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
            {soldOut ? (
              <BtnMultiuse classForBtn="btn-add-item">
                {convertUpperCase(soldOut)}
              </BtnMultiuse>
            ) : (
              <BtnMultiuse onClick={handleAddToCart} classForBtn="btn-add-item">
                {convertUpperCase(`Add To Cart`)}
              </BtnMultiuse>
            )}
            <p className="description">
              This is not the official website of conan gray. If you want to
              purchase the product, please{" "}
              <a
                href={`https://shop.conangray.com/${currentProduct.url}`}
                target="_blank"
                rel="noopener"
                className="click-here"
              >
                click here
              </a>
            </p>
          </div>
        </main>
      )}
      <Footer style={footerStyle} />
    </>
  );
}

export default PageProductDetail;
