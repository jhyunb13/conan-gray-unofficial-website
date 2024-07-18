import { useCartItem } from "../contexts/CartItemContext";

function ItemsQuantity({ link }) {
  const { numItems } = useCartItem();

  if (link.includes("shopping-cart") && numItems)
    return (
      <div id="cart-count">
        <span>{numItems}</span>
      </div>
    );
}

export default ItemsQuantity;
