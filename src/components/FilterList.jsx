import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

import Filter from "../ui/Filter";

const FILTERS = ["All", "In Stock", "Out of Stock"];

function FilterList({ category, setFilterOption, setCategoryOption }) {
  const navigate = useNavigate();

  function handleSettingCategory(e) {
    setCategoryOption(e.target.value);
    navigate(`?page=1`);
  }

  function handleSettingFilter(e) {
    setFilterOption(e.target.value);
    navigate(`?page=1`);
  }

  return (
    <>
      <div id="search-options" className="grid-2-col-lg">
        <Filter
          filterName="category"
          filterOptions={category}
          handleSettingValue={handleSettingCategory}
        />
        <Filter
          filterName="filter"
          filterOptions={FILTERS}
          handleSettingValue={handleSettingFilter}
          defaultValue="In Stock"
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
