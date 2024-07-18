import { createContext, useContext, useReducer } from "react";

import foundHeavenMerchData from "../data/found-heaven-merch/merchData.json";
import foundHeavenMusicData from "../data/found-heaven-merch/musicData.json";

import superacheMerch from "../data/superache-merch/merchData.json";

import {
  generateParams,
  getUniqueData,
  sortData,
  trimName,
} from "../utils/helpers";

const DataContext = createContext();

const foundHeavenMusic = foundHeavenMusicData.filter(
  (music) => !music.title.includes("Sunset Season")
);
const superacheMerchData = superacheMerch.map((data) => {
  return { ...data, title: trimName(data.title) };
});
const foundHeavenItemData = getUniqueData(
  foundHeavenMusic,
  foundHeavenMerchData
);

const initialState = {
  foundHeavenItemData,
  superacheItemData: superacheMerchData,
  allItemData: sortData(getUniqueData(foundHeavenItemData, superacheMerchData)),
  itemCategories: ["All", "CD", "LP", "Cassette", "Digital", "Merch"],
  inventoryStatuses: ["All", "In Stock", "Out of Stock"],
  currentCategory: "All",
  currentInventoryStatus: "In Stock",
  currentProduct: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "product/matching":
      return {
        ...state,
        currentProduct: state.allItemData.filter(
          (data) => action.payload === generateParams(data.title)
        ),
      };

    case "filter/inventoryStatus":
      return { ...state, currentInventoryStatus: action.payload };

    case "filter/itemCategory":
      return { ...state, currentCategory: action.payload };

    case "filter/reset":
      return {
        ...state,
        currentInventoryStatus: "In Stock",
        currentCategory: "All",
      };

    default:
      throw new Error("Unknown action");
  }
}

function DataProvider({ children }) {
  const [
    {
      allItemData,
      foundHeavenItemData,
      superacheItemData,
      itemCategories,
      inventoryStatuses,
      currentProduct: curProduct,
      currentCategory,
      currentInventoryStatus,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [currentProduct] = curProduct;
  const soldOut = currentProduct ? currentProduct.soldOut : "";

  return (
    <DataContext.Provider
      value={{
        allItemData,
        foundHeavenItemData,
        superacheItemData,
        itemCategories,
        inventoryStatuses,
        currentCategory,
        currentInventoryStatus,
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
