import propTypes from "prop-types";

function Category({ options, setFilterOptions }) {
  function handleSettingFilter(e) {
    setFilterOptions(e.target.value);
  }

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
        <select>
          <option>price, low to high</option>
        </select>
      </div>
    </div>
  );
}

Category.propTypes = {
  children: propTypes.string,
};

export default Category;
