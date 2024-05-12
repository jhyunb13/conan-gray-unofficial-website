import { useOutletContext, useLoaderData, Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const capitalizeLetters = useLoaderData();

  const [closeAlert, setCloseAlert] = useState(true);
  const newParam = new URLSearchParams([["page", "1"]]).toString();

  const sumPrice = calcTotalPrice(itemsInCart);

  function calcTotalPrice(itemsArr) {
    let totalPrice = 0;

    itemsArr.map(
      (item) =>
        (totalPrice =
          totalPrice + convertToNum(item.product.price) * item.quantity)
    );

    return totalPrice;
  }

  function formatPriceInUSD(sumPrice, quantity = 1) {
    return `$${
      Number.isInteger(sumPrice)
        ? `${sumPrice * quantity}.00`
        : sumPrice * quantity
    }`;
  }

  function convertToNum(string) {
    return Number(string.slice(1));
  }

  function handleAlertWarning() {
    setCloseAlert(false);
  }

  function handleSubtraction(id) {
    setItemsInCart((items) =>
      items.map((item) => {
        if (item.id === id && item.quantity > 1) {
          setCartCount((num) => num - 1);
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      })
    );
  }

  function handleAddition(id) {
    setItemsInCart((items) =>
      items.map((item) => {
        if (item.id === id) {
          setCartCount((num) => num + 1);
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      })
    );
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
            <table className="item-summary">
              <thead>
                <tr>
                  <th className="pb-10">Item Summary</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {itemsInCart.map((item) => (
                  <tr className="item-in-cart" key={item.id}>
                    <td className="item-info">
                      <img
                        src={`https:${item.product.img}`}
                        alt={item.product.title}
                      />
                      <div className="title-price">
                        <div>{item.product.title}</div>
                        <div>Price : {item.product.price}</div>
                        {item.size ? <div>Size : {item.size}</div> : ""}
                      </div>
                    </td>
                    <td className="quantity-selector">
                      <SelectorQuantity
                        id={item.id}
                        handleSubtraction={handleSubtraction}
                        handleAddition={handleAddition}
                      >
                        {item.quantity}
                      </SelectorQuantity>
                    </td>
                    <td className="item-subtotal pt-5">
                      <div>
                        {formatPriceInUSD(
                          convertToNum(item.product.price),
                          item.quantity
                        )}
                      </div>
                      <BtnRemove
                        id={item.id}
                        itemQuantity={item.quantity}
                        setCartCount={setCartCount}
                        setItemsInCart={setItemsInCart}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="order-summary">
              <thead>
                <tr>
                  <th className="pb-10">Order Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="grid-2-col-lg pt-20 pb-10">
                    <div>Subtotal</div>
                    <div>{formatPriceInUSD(sumPrice)}</div>
                  </td>
                  <td className="grid-2-col-lg pb-20">
                    <div>Shipping</div>
                    <div>Calculated at next step</div>
                  </td>
                </tr>
                <tr>
                  <td className="grid-2-col-lg pt-20 pb-20">
                    <div>Total</div>
                    <div>{formatPriceInUSD(sumPrice)}</div>
                  </td>
                </tr>
                <BtnMultiuse
                  classForBtn="btn-to-checkout"
                  handleBtnClick={handleAlertWarning}
                >
                  {capitalizeLetters(`Continue To Check Out`)}
                </BtnMultiuse>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <AlertNoResult>your cart is currently empty</AlertNoResult>
            <div className="btn-back-to-store">
              <Link to={`/store?${newParam}`}>
                <button className="button mt-20 ">
                  {capitalizeLetters(`Continue Shopping`)}
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
