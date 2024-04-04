import propTypes from "prop-types";

function MusicItem({ itemData }) {
  return (
    <div className="music-item">
      <img src={`https:${itemData.img}`} alt={itemData.title} />
      <div>{itemData.title}</div>
      <div>{itemData.price}</div>
      <div>{itemData.availability}</div>
    </div>
  );
}

MusicItem.propTypes = {
  itemData: propTypes.object,
};

export default MusicItem;
