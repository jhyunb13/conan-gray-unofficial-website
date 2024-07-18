import propTypes from "prop-types";

import styles from "./TableBodyOrder.module.css";

import { useCartItem } from "../../contexts/CartItemContext";

function TableBodyOrder() {
  const { sumPrice, formatCurrency } = useCartItem();

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
    </tbody>
  );
}

TableBodyOrder.propTypes = {
  setCloseAlert: propTypes.func,
};

export default TableBodyOrder;
