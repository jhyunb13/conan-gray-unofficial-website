import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../ui/Footer";
import AlertNoResult from "../ui/AlertNoResult";
import AlertWarning from "../components/AlertWarning";
import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBodyItems from "../components/TableBodyItems";
import TableBodyOrder from "../components/TableBodyOrder";
import styles from "./PageShoppingCart.module.css";

import { useCartItem } from "../contexts/CartItemContext";
import { convertUpperCase } from "../utils/helpers";

const ITEM_SUMMARY = ["Item Summary", "Quantity", "Subtotal"];
const ORDER_SUMMARY = ["Order Summary"];

function PageShoppingCart() {
  const [closeAlert, setCloseAlert] = useState(true);
  const { itemsInCart } = useCartItem();

  const newParam = new URLSearchParams([["page", "1"]]).toString();

  if (!itemsInCart.length)
    return (
      <>
        <main className={styles.emptyShoppingCart}>
          <AlertNoResult dataAvail={itemsInCart.length}>
            your cart is currently empty
          </AlertNoResult>
          <div className="btn-back-to-store">
            <Link to={`/store?${newParam}`}>
              <button className="button mt-20 ">
                {convertUpperCase(`Continue Shopping`)}
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );

  return (
    <>
      <main className={styles.shoppingCart}>
        <Table className={styles.itemSummary}>
          <TableHead category={ITEM_SUMMARY} />
          <TableBodyItems />
        </Table>
        <Table className={styles.orderSummary}>
          <TableHead category={ORDER_SUMMARY} />
          <TableBodyOrder setCloseAlert={setCloseAlert} />
        </Table>
      </main>
      <AlertWarning closeAlert={closeAlert} setCloseAlert={setCloseAlert} />
      <Footer />
    </>
  );
}

export default PageShoppingCart;
