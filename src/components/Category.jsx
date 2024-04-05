import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="filters">
      <div className="category">
        <div>
          <Link to={"/store/music"}>Music</Link>
        </div>
        <select>
          <option>All</option>
          <option>CD</option>
          <option>Vinyl</option>
          <option>Cassette</option>
        </select>
      </div>
      <div className="category">
        <div>
          <Link to={"/store/merch"}>Merch</Link>
        </div>
        <select>
          <option>All</option>
        </select>
      </div>
    </div>
  );
}

Category.propTypes = {
  children: propTypes.string,
};

export default Category;
