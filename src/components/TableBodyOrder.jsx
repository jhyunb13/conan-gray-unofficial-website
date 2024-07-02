import propTypes from "prop-types";

import BtnMultiuse from "../ui/BtnMultiuse";
import styles from "./TableBodyOrder.module.css";

import { useCartItem } from "../contexts/CartItemContext";
import { convertUpperCase } from "../utils/helpers";

function TableBodyOrder({ setCloseAlert }) {
  const { sumPrice, formatCurrency } = useCartItem();

  function handleAlertWarning() {
    setCloseAlert(false);
  }

  return (
    <tbody>
      <tr>
        <td className="grid-2-col-lg pt-20 pb-10">
          <div>Subtotal</div>
          <div>{formatCurrency(sumPrice)}</div>
        </td>
        <td className="grid-2-col-lg pb-20">
          <div>Shipping</div>
          <div>Calculated at next step</div>
        </td>
      </tr>
      <tr>
        <td className="grid-2-col-lg pt-20 pb-20">
          <div>Total</div>
          <div>{formatCurrency(sumPrice)}</div>
        </td>
      </tr>
      <BtnMultiuse
        classForBtn={styles.btnToCheckout}
        onClick={handleAlertWarning}
      >
        {convertUpperCase(`Continue To Check Out`)}
      </BtnMultiuse>
    </tbody>
  );
}

TableBodyOrder.propTypes = {
  setCloseAlert: propTypes.func,
};

export default TableBodyOrder;
