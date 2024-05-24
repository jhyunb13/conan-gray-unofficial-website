import { useState, useEffect } from "react";

export function useAvailProduct(inputData) {
  const [availProducts, setAvailProducts] = useState(
    inputData[1].filter((data) => !data.soldOut)
  );
  const [filterOption, setFilterOption] = useState("In Stock");

  useEffect(() => {
    function filterAvailability() {
      if (filterOption === "All") setAvailProducts(inputData[1]);
      if (filterOption === "Out of Stock")
        setAvailProducts(inputData[1].filter((data) => data.soldOut));
      if (filterOption === "In Stock")
        setAvailProducts(inputData[1].filter((data) => !data.soldOut));
    }
    filterAvailability();
  }, [filterOption, inputData]);

  return {
    setFilterOption,
    availProducts,
  };
}
