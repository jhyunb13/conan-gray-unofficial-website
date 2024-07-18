import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

import Filter from "./Filter";

import { useData } from "../../contexts/DataContext";

function FilterList() {
  const { itemCategories, inventoryStatuses, dispatch } = useData();
  const navigate = useNavigate();

  function handleCategory(e) {
    dispatch({ type: "filter/itemCategory", payload: e.target.value });
    navigate(`?page=1`);
  }

  function handleInventoryStatus(e) {
    dispatch({ type: "filter/inventoryStatus", payload: e.target.value });
    navigate(`?page=1`);
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
          filterName="filter"
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
