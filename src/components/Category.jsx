import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Category({ options, setFilterOption, setCategoryOption }) {
  const navigate = useNavigate();
  const filters = ["All", "In Stock", "Out of Stock"];

  function handleSettingCategory(e) {
    setCategoryOption(e.target.value);
    navigate(`?page=1`);
  }

  function handleSettingFilter(e) {
    setFilterOption(e.target.value);
    navigate(`?page=1`);
  }

  return (
    <div id="search-options" className="grid-2-col-lg">
      <div className="filtering">
        <div>{`Category`.toUpperCase()}</div>
        <select onChange={handleSettingCategory}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="filtering">
        <div>{`filter`.toUpperCase()}</div>
        <select onChange={handleSettingFilter}>
          {filters.map((option) => (
            <option
              key={option}
              value={option}
              defaultValue={option === "In Stock"}
              selected={option === "In Stock"}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Category.propTypes = {
  children: propTypes.string,
  options: propTypes.array,
  setFilterOption: propTypes.func,
  setCategoryOption: propTypes.func,
};

export default Category;
