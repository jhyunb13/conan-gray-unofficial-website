import { useState, useEffect } from "react";

import { useData } from "../contexts/DataContext";
import { useQueryString } from "./useQueryString";

export function useFilters(inputData) {
  const [availItems, setAvailItems] = useState(
    inputData.filter((data) => !data.soldOut)
  );
  const [categorizedItems, setCategorizedItems] = useState(availItems);
  const { itemCategories } = useData();
  const { getQueryString } = useQueryString();

  const currentCategory = getQueryString("category");
  const currentInventoryStatus = getQueryString("status");

  const [all, cd, lp, cassette, digital, merch] = itemCategories;

  useEffect(() => {
    function filterAvailability() {
      if (currentInventoryStatus === "All") setAvailItems(inputData);
      if (currentInventoryStatus === "Out of Stock")
        setAvailItems(inputData.filter((data) => data.soldOut));
      if (currentInventoryStatus === "In Stock")
        setAvailItems(inputData.filter((data) => !data.soldOut));
    }

    filterAvailability();
  }, [currentInventoryStatus, inputData]);

  useEffect(() => {
    function filterCategory() {
      if (currentCategory === all) setCategorizedItems(availItems);
      if (currentCategory === merch)
        setCategorizedItems(
          availItems.filter((data) => {
            return (
              !data.title.includes(cd) &&
              !data.title.includes(lp) &&
              !data.title.includes(cassette) &&
              !data.title.includes("Vinyl") &&
              !data.title.includes(digital)
            );
          })
        );
      if (currentCategory === cd)
        setCategorizedItems(
          availItems.filter(
            (data) => data.title.includes(cd) || data.title.includes("Box")
          )
        );
      if (currentCategory === lp)
        setCategorizedItems(
          availItems.filter(
            (data) => data.title.includes(lp) || data.title.includes("Vinyl")
          )
        );
      if (currentCategory === cassette)
        setCategorizedItems(
          availItems.filter((data) => data.title.includes(cassette))
        );
      if (currentCategory === digital)
        setCategorizedItems(
          availItems.filter((data) => data.title.includes(digital))
        );
    }

    filterCategory();
  }, [currentCategory, availItems, all, cd, lp, cassette, merch, digital]);

  return {
    availItems,
    categorizedItems,
  };
}
