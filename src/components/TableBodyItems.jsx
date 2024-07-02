import BtnRemove from "./BtnRemove";
import SelectorQuantity from "./SelectorQuantity";
import styles from "./TableBodyItems.module.css";

import { useCartItem } from "../contexts/CartItemContext";

function TableBodyItems() {
  const { itemsInCart, formatCurrency, dispatch } = useCartItem();

  function handleSubtraction(id) {
    dispatch({ type: "cartItem/subtract-quantity", payload: id });
  }

  function handleAddition(id) {
    dispatch({ type: "cartItem/add-quantity", payload: id });
  }

  return (
    <tbody>
      {itemsInCart.map((item) => (
        <tr className={styles.itemInCart} key={item.id}>
          <td className={styles.itemInfo}>
            <img src={`https:${item.product.img}`} alt={item.product.title} />
            <div className={styles.titlePrice}>
              <div>{item.product.title}</div>
              <div>Price : {item.product.price}</div>
              {item.size ? <div>Size : {item.size}</div> : ""}
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
            <div>{formatCurrency(item.product.price, item.quantity)}</div>
            <BtnRemove id={item.id} itemQuantity={item.quantity} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBodyItems;
