import BtnRemove from "../../ui/BtnRemove";
import SelectorQuantity from "../product-page/SelectorQuantity";
import Price from "../../ui/Price";

import styles from "./TableBodyItems.module.css";

import { useCartItem } from "../../contexts/CartItemContext";

function TableBodyItems() {
  const { itemsInCart, formatCurrency, cartDispatch } = useCartItem();

  function handleSubtraction(id) {
    cartDispatch({ type: "cartItem/subtract-quantity", payload: id });
  }

  function handleAddition(id) {
    cartDispatch({ type: "cartItem/add-quantity", payload: id });
  }

  return (
    <tbody>
      {itemsInCart.map((item) => (
        <tr className={styles.itemInCart} key={item.id}>
          <td className={styles.itemInfo}>
            <img src={`https:${item.product.img}`} alt={item.product.title} />
            <div className={styles.titlePrice}>
              <div>{item.product.title}</div>
              <div style={{ display: "flex" }}>
                <span>Price: </span>
                <Price type="shopping-cart" data={item.product} />
              </div>
              {item.size && (
                <div>
                  <span>Size: </span>
                  <span>{item.size}</span>
                </div>
              )}
            </div>
          </td>
          <td className="quantity-selector">
            <SelectorQuantity
              id={item.id}
              handleSubtraction={handleSubtraction}
              handleAddition={handleAddition}
            >
              {item.quantity}
            </SelectorQuantity>
          </td>
          <td className={`${styles.itemSubtotal} pt-5"`}>
            {item.product.price && (
              <div>{formatCurrency(item.product.price, item.quantity)}</div>
            )}
            {item.product.currentPrice && (
              <div>
                {formatCurrency(item.product.currentPrice, item.quantity)}
              </div>
            )}
            <BtnRemove id={item.id} itemQuantity={item.quantity} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBodyItems;
