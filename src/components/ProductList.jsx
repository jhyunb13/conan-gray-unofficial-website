import Item from "./Item";
import propTypes from "prop-types";

function ProductList({
  content,
  cdClick,
  vinylClick,
  cassetteClick,
  setCdClick,
  setVinylClick,
  setCassetteClick,
}) {
  return (
    <div
      className={`music-list grid-2-col-md grid-3-col
      ${content.length <= 4 && "grid-2-row-md"}
      ${content.length >= 5 && "grid-4-row-md"}
      ${content.length >= 9 && "grid-6-row-md"}
      ${content.length <= 6 && "grid-2-row"}
      ${content.length >= 7 && "grid-3-row"}
      ${content.length >= 10 && "grid-4-row"}`}
    >
      {content.map((itemData) => {
        return (
          <Item
            itemData={itemData}
            key={`${itemData.title}-${Math.trunc(Math.random() * 1000)}`}
          />
        );
      })}
    </div>
  );
}

ProductList.propTypes = {
  content: propTypes.array,
};

export default ProductList;
