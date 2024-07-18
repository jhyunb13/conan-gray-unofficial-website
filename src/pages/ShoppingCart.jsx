import { useState } from "react";

import AlertNoResult from "../ui/AlertNoResult";
import AlertWarning from "../ui/AlertWarning";
import Table from "../features/shopping-cart/Table";
import TableHead from "../features/shopping-cart/TableHead";
import TableBodyItems from "../features/shopping-cart/TableBodyItems";
import TableBodyOrder from "../features/shopping-cart/TableBodyOrder";
import BtnMultiuse from "../ui/BtnMultiuse";
import styles from "./ShoppingCart.module.css";

import { useCartItem } from "../contexts/CartItemContext";
import { convertUpperCase } from "../utils/helpers";

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
          <AlertNoResult dataAvail={itemsInCart.length}>
            your cart is currently empty
          </AlertNoResult>
          <BtnMultiuse classForBtn="btn-back-to-store" type="empty-cart">
            {convertUpperCase(`Continue Shopping`)}
          </BtnMultiuse>
        </main>
      </>
    );

  return (
    <>
      <main className={styles.shoppingCart}>
        <Table className={styles.itemSummary}>
          <TableHead category={ITEM_SUMMARY} />
          <TableBodyItems />
        </Table>
        <div>
          <Table className={styles.orderSummary}>
            <TableHead category={ORDER_SUMMARY} />
            <TableBodyOrder />
          </Table>
          <BtnMultiuse
            classForBtn={styles.btnToCheckout}
            onClick={handleAlertWarning}
            type="checkout"
          >
            {convertUpperCase(`Continue To Check Out`)}
          </BtnMultiuse>
        </div>
      </main>
      <AlertWarning closeAlert={closeAlert} setCloseAlert={setCloseAlert} />
    </>
  );
}

export default ShoppingCart;
