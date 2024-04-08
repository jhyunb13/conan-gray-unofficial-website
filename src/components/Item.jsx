import propTypes from "prop-types";

function Item({ itemData }) {
  return (
    <div className="item">
      <img src={`https:${itemData.img}`} alt={itemData.title} />
      <div>{itemData.title}</div>
      <div>{itemData.price}</div>
      <div>{itemData.availability}</div>
    </div>
  );
}

Item.propTypes = {
  itemData: propTypes.object,
};

export default Item;
