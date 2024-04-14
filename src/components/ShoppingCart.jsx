import { useOutletContext } from "react-router-dom";

function ShoppingCart() {
  const {
    count: [count, setCount],
    cartItem: [itemsInCart, setItemsInCart],
  } = useOutletContext();

  let sumPrice = 0;

  function handleRemoveItem(selectedItem) {
    if (itemsInCart.length > 2)
      setItemsInCart((items) => {
        items.filter((item) => item.product.title !== selectedItem);
      });
    else setItemsInCart([]);
  }

  itemsInCart.map((item) => {
    return (sumPrice =
      sumPrice + Number(item.product.price.slice(1)) * item.quantity);
  });

  return (
    <div
      className={`${
        itemsInCart.length ? "shopping-cart" : "empty-shopping-cart"
      } pt-35`}
    >
      {itemsInCart.length ? (
        <>
          <div className="item-summary">
            <div>
              <div>Item Summary</div>
              <div>price</div>
              <div>quantity</div>
              <div>subtotal</div>
            </div>
            {itemsInCart.map((item) => (
              <div className="item-in-cart" key={item.product.title}>
                <div>
                  <img src={item.product.img} alt={item.product.title} />
                  <div>
                    <div>{item.product.title}</div>
                    {item.size ? <div>size : {item.size}</div> : null}
                  </div>
                </div>
                <div>{item.product.price}</div>
                <div>{item.quantity}</div>
                <div>
                  <div>
                    {" "}
                    {Number.isInteger(Number(item.product.price.slice(1)))
                      ? `${
                          Number(item.product.price.slice(1)) * item.quantity
                        }.00`
                      : `${
                          Number(item.product.price.slice(1)) * item.quantity
                        }`}
                  </div>
                  <button onClick={() => handleRemoveItem(item.product.title)}>
                    remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="order-summary">Order Summary</div>
            <div className="grid-2-col">
              <div>subtotal</div>
              <div>
                ${Number.isInteger(sumPrice) ? `${sumPrice}.00` : sumPrice}
              </div>
            </div>
            <div className="grid-2-col">
              <div>shipping</div>
              <div>calculated at next step</div>
            </div>
            <div className="grid-2-col">
              <div>total</div>
              <div>
                ${Number.isInteger(sumPrice) ? `${sumPrice}.00` : sumPrice}
              </div>
            </div>
            <button className="button">continue to check out</button>
          </div>
        </>
      ) : (
        <>
          <div>your cart is currently empty</div>
          <button className="button">continue shopping</button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
