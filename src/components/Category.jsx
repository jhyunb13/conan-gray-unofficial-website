import propTypes from "prop-types";

function Category({ options }) {
  return (
    <div className="filters grid-2-col">
      <div className="category">
        <div>Category</div>
        <select>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="category">
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
