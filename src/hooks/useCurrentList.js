import { useState, useEffect } from "react";

export function useCurrentList(inputData) {
  const [currentList, setCurrentList] = useState(
    inputData.filter((data) => !data.soldOut)
  );
  const [filterOption, setFilterOption] = useState("In Stock");

  useEffect(() => {
    function filterAvailability() {
      if (filterOption === "All") setCurrentList(inputData);
      if (filterOption === "Out of Stock")
        setCurrentList(inputData.filter((data) => data.soldOut));
      if (filterOption === "In Stock")
        setCurrentList(inputData.filter((data) => !data.soldOut));
    }
    filterAvailability();
  }, [filterOption, inputData]);

  return {
    setFilterOption,
    currentList,
  };
}
