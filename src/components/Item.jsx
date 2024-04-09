import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Item({ itemData }) {
  const urlParam = itemData.title
    .toLowerCase()
    .replace("(", "")
    .replace(")", "")
    .split(" ")
    .join("-");

  return (
    <div className="item">
      <Link to={`/store/products/${urlParam}`} className="no-link-style">
        <div>{itemData.title}</div>
        <img src={`https:${itemData.img}`} alt={itemData.title} />
        <div className="item-price">
          <div>{itemData.price}</div>
          {itemData.availability && (
            <div className="item-availability">
              {itemData.availability.toUpperCase()}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

Item.propTypes = {
  itemData: propTypes.object,
};

export default Item;
