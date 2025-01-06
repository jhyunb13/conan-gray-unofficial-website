import propTypes from "prop-types";
import { nanoid } from "nanoid";

import Product from "./Product";
import styles from "./ProductList.module.scss";

function ProductList({ pageContent, dataAvail }) {
  if (!dataAvail) return;

  if (dataAvail)
    return (
      <ul className={styles.productList}>
        {pageContent.map((productData) => {
          return <Product productData={productData} key={nanoid()} />;
        })}
      </ul>
    );
}

ProductList.propTypes = {
  pageContent: propTypes.array,
  dataAvail: propTypes.number,
};

export default ProductList;
