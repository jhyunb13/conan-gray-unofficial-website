import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import BtnRemove from "./BtnRemove";
import QuantitySelector from "./QuantitySelector";
import Footer from "./Footer";
import AlertNoResult from "./AlertNoResult";
import { useState } from "react";
import AlertWarning from "./AlertWarning";

function ShoppingCart() {
  const {
    count: [count, setCount],
    cartItem: [itemsInCart, setItemsInCart],
  } = useOutletContext();
  const [closeAlert, setCloseAlert] = useState(true);
  const newParam = new URLSearchParams([["page", "1"]]).toString();

  let sumPrice = 0;

  itemsInCart.map((item) => {
    return (sumPrice =
      sumPrice + Number(item.product.price.slice(1)) * item.quantity);
  });

  function handleAlertMessage() {
    setCloseAlert(false);
  }

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
              {itemsInCart.map((item, i) => (
                <div
                  className="item-in-cart"
                  key={
                    item.size
                      ? `${item.product.title}-${item.size}-${Math.trunc(
                          Math.random() * 1000
                        )}`
                      : `${item.product.title}-${Math.trunc(
                          Math.random() * 1000
                        )}`
                  }
                >
                  <div>
                    <img src={item.product.img} alt={item.product.title} />
                    <div>
                      <div>{item.product.title}</div>
                      {item.size ? <div>size : {item.size}</div> : null}
                    </div>
                  </div>
                  <div className="pt-5">{item.product.price}</div>
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
                  <div className="subtotal pt-5">
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
                  </div>
                  <BtnRemove
                    itemTitle={item.product.title}
                    itemQuantity={item.quantity}
                    itemSize={item.size}
                    setCount={setCount}
                    setItemsInCart={setItemsInCart}
                    number={i}
                  />
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
              <button className="button mt-20" onClick={handleAlertMessage}>
                {`Continue To Check Out`.toUpperCase()}
              </button>
            </div>
          </>
        ) : (
          <>
            <AlertNoResult>your cart is currently empty</AlertNoResult>
            <Link to={`/store?${newParam}`}>
              <button className="button mt-20 ">
                {`Continue Shopping`.toUpperCase()}
              </button>
            </Link>
          </>
        )}
      </div>
      <AlertWarning closeAlert={closeAlert} setCloseAlert={setCloseAlert} />
      <Footer />
    </>
  );
}

export default ShoppingCart;
