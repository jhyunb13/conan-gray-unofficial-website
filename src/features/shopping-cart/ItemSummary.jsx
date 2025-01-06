import BtnRemove from "../../ui/BtnRemove";
import SelectorQuantity from "../product-page/SelectorQuantity";
import Price from "../../ui/Price";

import styles from "./ItemSummary.module.scss";

import { useCartItem } from "../../contexts/CartItemContext";

function ItemSummary() {
  const { itemsInCart, formatCurrency, cartDispatch } = useCartItem();

  function handleSubtraction(id) {
    cartDispatch({ type: "cartItem/subtract-quantity", payload: id });
  }

  function handleAddition(id) {
    cartDispatch({ type: "cartItem/add-quantity", payload: id });
  }

  return (
    <>
      {itemsInCart.map((item, i) => (
        <div className={styles.itemSummary} key={i}>
          <div className={styles.itemInfo}>
            <img
              className={styles.img}
              src={`https:${item.product.img}`}
              alt={item.product.title}
            />
            <div>
              <div className={styles.itemName}>{item.product.title}</div>
              <div className={styles.priceInfo}>
                <div>Price</div>
                <Price type="shopping-cart" data={item.product} />
                {item.size && (
                  <>
                    <div>Size</div>
                    <div>{item.size}</div>
                  </>
                )}
              </div>
            </div>
          </div>

          <SelectorQuantity
            type="shopping-cart"
            id={item.id}
            handleSubtraction={handleSubtraction}
            handleAddition={handleAddition}
          >
            {item.quantity}
          </SelectorQuantity>

          <div className={styles.subtotal}>
            {item.product.price && (
              <div>{formatCurrency(item.product.price, item.quantity)}</div>
            )}
            {item.product.currentPrice && (
              <div>
                {formatCurrency(item.product.currentPrice, item.quantity)}
              </div>
            )}
          </div>
          <BtnRemove id={item.id} itemQuantity={item.quantity} />
        </div>
      ))}
    </>
  );
}

export default ItemSummary;
