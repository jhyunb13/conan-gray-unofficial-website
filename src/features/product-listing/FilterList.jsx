import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

import Filter from "./Filter";

import { useData } from "../../contexts/DataContext";
import { useQueryString } from "../../hooks/useQueryString";

function FilterList() {
  const { itemCategories, inventoryStatuses } = useData();
  const { setQueryString, updatedQueryString } = useQueryString();
  const navigate = useNavigate();

  function handleCategory(e) {
    setQueryString("category", e.target.value);
    setQueryString("page", 1);
    navigate(`?${updatedQueryString}`);
  }

  function handleInventoryStatus(e) {
    setQueryString("status", e.target.value);
    setQueryString("page", 1);
    navigate(`?${updatedQueryString}`);
  }

  return (
    <>
      <div id="search-options" className="grid-2-col-lg">
        <Filter
          filterName="category"
          filterOptions={itemCategories}
          handleSettingValue={handleCategory}
        />
        <Filter
          filterName="availability"
          filterOptions={inventoryStatuses}
          handleSettingValue={handleInventoryStatus}
        />
      </div>
    </>
  );
}

FilterList.propTypes = {
  children: propTypes.string,
  category: propTypes.array,
  setFilterOption: propTypes.func,
  setCategoryOption: propTypes.func,
};

export default FilterList;
