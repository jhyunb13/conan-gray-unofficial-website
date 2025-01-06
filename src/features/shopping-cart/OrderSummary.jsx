import propTypes from "prop-types";

import styles from "./OrderSummary.module.scss";

import { useCartItem } from "../../contexts/CartItemContext";

function OrderSummary() {
  const { sumPrice, formatCurrency } = useCartItem();

  return (
    <>
      <div className={styles.orderSummary}>
        <div>Subtotal</div>
        <div>{formatCurrency(sumPrice)}</div>
        <div>Shipping</div>
        <div>Calculated at next step</div>
      </div>
      <div className={styles.total}>
        <div>Total</div>
        <div>{formatCurrency(sumPrice)}</div>
      </div>
    </>
  );
}

OrderSummary.propTypes = {
  setCloseAlert: propTypes.func,
};

export default OrderSummary;
