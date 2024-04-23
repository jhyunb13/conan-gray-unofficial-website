import { useOutletContext, Link } from "react-router-dom";
import { useState } from "react";
import BtnRemove from "./BtnRemove";
import SelectorQuantity from "./SelectorQuantity";
import Footer from "./Footer";
import AlertNoResult from "./AlertNoResult";
import AlertWarning from "./AlertWarning";
import BtnMultiuse from "./BtnMultiuse";

function PageShoppingCart() {
  const {
    cartCount: [cartCount, setCartCount],
    cartItem: [itemsInCart, setItemsInCart],
  } = useOutletContext();
  const [closeAlert, setCloseAlert] = useState(true);
  const newParam = new URLSearchParams([["page", "1"]]).toString();

  let sumPrice = 0;
  itemsInCart.map((item) => {
    return (sumPrice =
      sumPrice + Number(item.product.price.slice(1)) * item.quantity);
  });
  const totalPriceInUSD = `${
    Number.isInteger(sumPrice) ? `${sumPrice}.00` : sumPrice
  }`;

  function handleAlertWarning() {
    setCloseAlert(false);
  }

  function handleSubtraction(id) {
    setItemsInCart((items) => {
      return items.map((item) => {
        if (item.id === id && item.quantity > 1) {
          setCartCount((num) => num - 1);
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });
    });
  }

  function handleAddition(id) {
    setItemsInCart((items) => {
      return items.map((item) => {
        if (item.id === id) {
          setCartCount((num) => num + 1);
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      });
    });
  }

  return (
    <>
      <main
        className={`${
          itemsInCart.length
            ? "shopping-cart grid-1-col-md "
            : "empty-shopping-cart"
        }`}
      >
        {itemsInCart.length ? (
          <>
            <div className="item-summary">
              <div>
                <div className="pb-10">Item Summary</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>
              {itemsInCart.map((item) => (
                <div className="item-in-cart" key={item.id}>
                  <div className="item-info">
                    <img
                      src={`https:${item.product.img}`}
                      alt={item.product.title}
                    />
                    <div className="title-price">
                      <div>{item.product.title}</div>
                      <div>Price : {item.product.price}</div>
                      {item.size ? <div>Size : {item.size}</div> : null}
                    </div>
                  </div>
                  <div className="quantity-selector">
                    <SelectorQuantity
                      id={item.id}
                      handleSubtraction={handleSubtraction}
                      handleAddition={handleAddition}
                    >
                      {item.quantity}
                    </SelectorQuantity>
                  </div>
                  <div className="item-subtotal pt-5">
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
                    id={item.id}
                    itemQuantity={item.quantity}
                    setCartCount={setCartCount}
                    setItemsInCart={setItemsInCart}
                  />
                </div>
              ))}
            </div>
            <div className="order-summary">
              <div className="pb-10">Order Summary</div>
              <div className="grid-2-col-lg pt-20 pb-10">
                <div>Subtotal</div>
                <div>${totalPriceInUSD}</div>
              </div>
              <div className="grid-2-col-lg pb-20">
                <div>Shipping</div>
                <div>Calculated at next step</div>
              </div>
              <div className="grid-2-col-lg pt-20 pb-20">
                <div>Total</div>
                <div>${totalPriceInUSD}</div>
              </div>
              <BtnMultiuse
                classForBtn="btn-to-checkout"
                handleBtnClick={handleAlertWarning}
              >
                {`Continue To Check Out`.toUpperCase()}
              </BtnMultiuse>
            </div>
          </>
        ) : (
          <>
            <AlertNoResult>your cart is currently empty</AlertNoResult>
            <div className="btn-back-to-store">
              <Link to={`/store?${newParam}`}>
                <button className="button mt-20 ">
                  {`Continue Shopping`.toUpperCase()}
                </button>
              </Link>
            </div>
          </>
        )}
      </main>
      <AlertWarning closeAlert={closeAlert} setCloseAlert={setCloseAlert} />
      <Footer />
    </>
  );
}

export default PageShoppingCart;
