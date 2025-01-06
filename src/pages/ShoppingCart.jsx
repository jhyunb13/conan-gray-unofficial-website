import { useState } from "react";

import Summary from "../features/shopping-cart/Summary";
import ItemSummary from "../features/shopping-cart/ItemSummary";
import OrderSummary from "../features/shopping-cart/OrderSummary";
import AlertNoResult from "../ui/AlertNoResult";
import ModalWarning from "../ui/ModalWarning";
import BtnRound from "../ui/BtnRound";
import InfoLinks from "../ui/InfoLinks";

import styles from "./ShoppingCart.module.scss";

import { useCartItem } from "../contexts/CartItemContext";

const ITEM_SUMMARY = ["Item Summary", "Quantity", "Subtotal"];
const ORDER_SUMMARY = ["Order Summary"];

function ShoppingCart() {
  const [closeAlert, setCloseAlert] = useState(true);
  const { itemsInCart } = useCartItem();

  function handleAlertWarning() {
    setCloseAlert(false);
  }

  if (!itemsInCart.length)
    return (
      <>
        <main className={styles.emptyShoppingCart}>
          <div className={styles.alertMessage}>
            <AlertNoResult>Your cart is currently empty</AlertNoResult>
            <BtnRound type="empty-cart" />
          </div>
          <InfoLinks />
        </main>
      </>
    );

  return (
    <>
      <main className={styles.shoppingCart}>
        <Summary type="item" headers={ITEM_SUMMARY}>
          <ItemSummary />
        </Summary>
        <Summary type="order" headers={ORDER_SUMMARY}>
          <OrderSummary />
          <BtnRound type="checkout" onClick={handleAlertWarning} />
          <InfoLinks />
        </Summary>
      </main>
      <ModalWarning closeAlert={closeAlert} setCloseAlert={setCloseAlert} />
    </>
  );
}

export default ShoppingCart;
