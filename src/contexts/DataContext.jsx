import { createContext, useContext, useReducer } from "react";

import merch from "../assets/merchData.json";
import music from "../assets/musicData.json";

const DataContext = createContext();

const CATEGORY_ALL = ["All", "CD", "LP", "Cassette", "Merch"];
const CATEGORY_MUSIC = ["All", "CD", "LP", "Cassette"];
const CATEGORY_MERCH = ["All", "Tops", "Outerwear", "Accessories"];

const initialState = {
  allProductData: sortData(getUniqueData(music, merch)),
  merchData: merch,
  musicData: music,
  category: { all: CATEGORY_ALL, music: CATEGORY_MUSIC, merch: CATEGORY_MERCH },
  currentList: [],
  currentProduct: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "product/matching":
      return {
        ...state,
        currentProduct: state.allProductData.filter(
          (data) =>
            action.payload ===
            data.title
              .toLowerCase()
              .replace("(", "")
              .replace(")", "")
              .split(" ")
              .join("-")
        ),
      };

    default:
      throw new Error("Unknown action");
  }
}

function getUniqueData(data1, data2) {
  return data1
    .concat(data2)
    .filter(
      (obj, i) =>
        i === data1.concat(data2).findIndex((o) => obj.title === o.title)
    );
}

function sortData(data) {
  const dataIncludingFh = data.filter((data) =>
    data.title.includes(`found heaven`.toUpperCase())
  );
  const dataExcludingFh = data.filter(
    (data) => !data.title.includes(`found heaven`.toUpperCase())
  );

  return dataIncludingFh.concat(dataExcludingFh);
}

function DataProvider({ children }) {
  const [
    {
      allProductData,
      merchData,
      musicData,
      category,
      currentProduct: curProduct,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [currentProduct] = curProduct;
  const soldOut = currentProduct ? currentProduct.soldOut : "";

  return (
    <DataContext.Provider
      value={{
        allProductData,
        merchData,
        musicData,
        category,
        currentProduct,
        soldOut,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const value = useContext(DataContext);

  if (value === undefined)
    throw new Error("DataContext was used outside of DataProvider");
  return value;
}

export { DataProvider, useData };
