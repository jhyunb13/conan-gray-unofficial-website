import Product from "./Product";
import propTypes from "prop-types";

function ProductList({ content }) {
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
      {content.map((productData) => {
        return (
          <Product
            productData={productData}
            key={`${productData.title}-${Math.trunc(Math.random() * 1000)}`}
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
