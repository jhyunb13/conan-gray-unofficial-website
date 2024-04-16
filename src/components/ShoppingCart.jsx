import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import BtnRemove from "./BtnRemove";
import QuantitySelector from "./QuantitySelector";
import Footer from "./Footer";

function ShoppingCart() {
  const {
    count: [count, setCount],
    cartItem: [itemsInCart, setItemsInCart],
  } = useOutletContext();
  const newParam = new URLSearchParams([["page", "1"]]).toString();

  let sumPrice = 0;

  itemsInCart.map((item) => {
    return (sumPrice =
      sumPrice + Number(item.product.price.slice(1)) * item.quantity);
  });

  return (
    <>
      <div
        className={`${
          itemsInCart.length ? "shopping-cart" : "empty-shopping-cart"
        } pt-35`}
      >
        {itemsInCart.length ? (
          <>
            <div className="item-summary">
              <div>
                <div className="pb-10">Item Summary</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>
              {itemsInCart.map((item) => (
                <div
                  className="item-in-cart"
                  key={`${item.product.title}-${item.size}`}
                >
                  <div>
                    <img src={item.product.img} alt={item.product.title} />
                    <div>
                      <div>{item.product.title}</div>
                      {item.size ? <div>size : {item.size}</div> : null}
                    </div>
                  </div>
                  <div>{item.product.price}</div>
                  <div className="quantity-selector">
                    <QuantitySelector
                      title={item.product.title}
                      count={count}
                      setItemsInCart={setItemsInCart}
                      setCount={setCount}
                    >
                      {item.quantity}
                    </QuantitySelector>
                  </div>
                  <div className="subtotal">
                    <div>
                      $
                      {Number.isInteger(Number(item.product.price.slice(1)))
                        ? `${
                            Number(item.product.price.slice(1)) * item.quantity
                          }.00`
                        : `${
                            Number(item.product.price.slice(1)) * item.quantity
                          }`}
                    </div>
                    <BtnRemove
                      itemTitle={item.product.title}
                      itemQuantity={item.quantity}
                      setCount={setCount}
                      setItemsInCart={setItemsInCart}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="order-summary">
              <div className="pb-10">Order Summary</div>
              <div className="grid-2-col pt-20 pb-10">
                <div>Subtotal</div>
                <div>
                  ${Number.isInteger(sumPrice) ? `${sumPrice}.00` : sumPrice}
                </div>
              </div>
              <div className="grid-2-col pb-20">
                <div>Shipping</div>
                <div>Calculated at next step</div>
              </div>
              <div className="grid-2-col pt-20 pb-20">
                <div>Total</div>
                <div>
                  ${Number.isInteger(sumPrice) ? `${sumPrice}.00` : sumPrice}
                </div>
              </div>
              <button className="button mt-20">Continue To Check out</button>
            </div>
          </>
        ) : (
          <>
            <h1>your cart is currently empty</h1>
            <Link to={`/store?${newParam}`}>
              <button className="button mt-20 ">Continue Shopping</button>
            </Link>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ShoppingCart;
