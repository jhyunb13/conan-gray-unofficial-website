import Product from "./Product";
import propTypes from "prop-types";

function ProductList({ content }) {
  return (
    <div
      id="product-list"
      className={`grid-2-col-md grid-3-col-lg ${
        content.length <= 2 ? "grid-1-row-md" : ""
      } ${content.length >= 3 ? "grid-2-row-md" : ""} ${
        content.length >= 5 ? "grid-3-row-md" : ""
      } ${content.length >= 7 ? "grid-4-row-md" : ""} ${
        content.length >= 9 ? "grid-5-row-md" : ""
      }${content.length >= 11 ? "grid-6-row-md" : ""} ${
        content.length <= 3 ? "grid-1-row-lg" : ""
      } ${content.length >= 4 ? "grid-2-row-lg" : ""} ${
        content.length >= 7 ? "grid-3-row-lg" : ""
      }${content.length >= 10 ? "grid-4-row-lg" : ""}`}
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
