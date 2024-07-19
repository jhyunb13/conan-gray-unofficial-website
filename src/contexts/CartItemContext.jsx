import { createContext, useContext, useReducer, useEffect } from "react";
import { nanoid } from "nanoid";

const CartItemContext = createContext();

const initialState = {
  quantity: 1,
  sizeSelected: "S",
  numItems: getLocalstorageData("numItems", 0),
  itemsInCart: getLocalstorageData("itemsInCart", []),
};

function getLocalstorageData(key, initialValue) {
  const storage = localStorage.getItem(key);
  const storedItems = JSON.parse(storage);
  return storage ? storedItems : initialValue;
}

function reducer(state, action) {
  const item = state.itemsInCart.filter((item) => item.id === action.payload);

  switch (action.type) {
    case "quantity/add":
      return { ...state, quantity: state.quantity + 1 };

    case "quantity/subtract":
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    case "size/select":
      return { ...state, sizeSelected: action.payload };

    case "item/add":
      return {
        ...state,
        numItems: state.numItems + state.quantity,
        itemsInCart: [
          ...state.itemsInCart,
          action.payload.title.includes("TEE") ||
          action.payload.title.includes("HOODIE") ||
          action.payload.title.includes("SWEATER") ||
          action.payload.title.includes("PULLOVER")
            ? {
                id: nanoid(),
                product: action.payload,
                size: state.sizeSelected,
                quantity: state.quantity,
              }
            : {
                id: nanoid(),
                product: action.payload,
                quantity: state.quantity,
              },
        ],
      };

    case "cartItem/remove":
      return {
        ...state,
        numItems: state.numItems - action.payload.quantity,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "cartItem/subtract-quantity":
      return {
        ...state,
        numItems:
          state.numItems > 1 && item[0].quantity > 1
            ? state.numItems - 1
            : state.numItems,
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.id === action.payload && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        }),
      };

    case "cartItem/add-quantity":
      return {
        ...state,
        numItems: state.numItems + 1,
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        }),
      };

    case "size-quantity/reset":
      return { ...state, quantity: 1, sizeSelected: "S" };

    default:
      throw new Error("Unknown action");
  }
}

function CartItemProvider({ children }) {
  const [{ quantity, sizeSelected, numItems, itemsInCart }, cartDispatch] =
    useReducer(reducer, initialState);

  const sumPrice = calcTotalPrice(itemsInCart);

  function storeInLocalstorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function calcTotalPrice(itemsArr) {
    let totalPrice = 0;

    itemsArr.map((item) => {
      const itemPrice = item.product.price
        ? item.product.price
        : item.product.currentPrice;

      return (totalPrice =
        totalPrice + convertToNum(itemPrice) * item.quantity);
    });

    return totalPrice;
  }

  function convertToNum(string) {
    return Number(string.slice(1));
  }

  function formatCurrency(price, quantity = 1) {
    const convert = typeof price === "number" ? price : convertToNum(price);

    return `$${
      Number.isInteger(convert)
        ? `${convert * quantity}.00`
        : convert * quantity
    }`;
  }

  useEffect(() => {
    storeInLocalstorage("itemsInCart", itemsInCart);
    storeInLocalstorage("numItems", numItems);
  }, [itemsInCart, numItems]);

  //   useEffect(() => {
  //     localStorage.clear();
  //   }, []);

  return (
    <CartItemContext.Provider
      value={{
        quantity,
        sizeSelected,
        numItems,
        itemsInCart,
        sumPrice,
        formatCurrency,
        cartDispatch,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
}

function useCartItem() {
  const value = useContext(CartItemContext);

  if (value === undefined)
    throw new Error("CartItemContext was used outside of CartItemProvider");

  return value;
}

export { CartItemProvider, useCartItem };
