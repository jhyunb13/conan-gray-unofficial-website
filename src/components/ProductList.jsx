import Product from "./Product";
import propTypes from "prop-types";

function ProductList({ pageContent }) {
  return (
    <div
      id="product-list"
      className={`grid-2-col-md grid-3-col-lg ${
        pageContent.length <= 2 ? "grid-1-row-md" : ""
      } ${pageContent.length >= 3 ? "grid-2-row-md" : ""} ${
        pageContent.length >= 5 ? "grid-3-row-md" : ""
      } ${pageContent.length >= 7 ? "grid-4-row-md" : ""} ${
        pageContent.length >= 9 ? "grid-5-row-md" : ""
      } ${pageContent.length >= 11 ? "grid-6-row-md" : ""} ${
        pageContent.length <= 3 ? "grid-1-row-lg" : ""
      } ${pageContent.length >= 4 ? "grid-2-row-lg" : ""} ${
        pageContent.length >= 7 ? "grid-3-row-lg" : ""
      } ${pageContent.length >= 10 ? "grid-4-row-lg" : ""}`}
    >
      {pageContent.map((productData) => {
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
  pageContent: propTypes.array,
};

export default ProductList;
