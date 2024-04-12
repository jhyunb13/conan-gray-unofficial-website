import { useOutletContext } from "react-router-dom";

function ShoppingCart() {
  const {
    count: [count, setCount],
    cartItem: [itemsInCart, setItemsInCart],
  } = useOutletContext();

  let sumPrice = 0;

  itemsInCart.forEach((item) => {
    return (sumPrice =
      sumPrice + Number(item.product.price.slice(1)) * item.quantity);
  });

  return (
    <div className="pt-35">
      your cart is empty
      <div>product you added</div>
      {itemsInCart.length &&
        itemsInCart.map((item) => (
          <div key={item.product.title}>
            <div>item : {item.product.title}</div>
            <div>quantity : {item.quantity}</div>
          </div>
        ))}
      <div>the total number of items : {count}</div>
      <div>
        subtotal price : $
        {Number.isInteger(sumPrice) ? `${sumPrice}.00` : sumPrice}
      </div>
      <button className="button">check out</button>
    </div>
  );
}

export default ShoppingCart;
