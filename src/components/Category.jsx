import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Category({ options, setFilterOptions }) {
  const navigate = useNavigate();

  function handleSettingFilter(e) {
    setFilterOptions(e.target.value);
    navigate(`?page=1`);
  }

  function handleSettingSort(e) {}

  return (
    <div className="search-options grid-2-col">
      <div className="filtering">
        <div>Category</div>
        <select onChange={handleSettingFilter}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="sorting">
        <div>Sort By</div>
        <select onChange={handleSettingSort}>
          <option>A - Z</option>
          <option>Z - A</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
        </select>
      </div>
    </div>
  );
}

Category.propTypes = {
  children: propTypes.string,
};

export default Category;
