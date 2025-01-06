import styles from "./Description.module.scss";

import { useData } from "../contexts/DataContext";

function Description() {
  const { currentProduct } = useData();
  const url = currentProduct.url;

  return (
    <p className={styles.productDescription}>
      This is not the official website of Conan Gray. If you want to purchase
      the product, please{" "}
      <a
        href={`https://shop.conangray.com/${url}`}
        target="_blank"
        rel="noopener"
        className={styles.link}
      >
        click here
      </a>
    </p>
  );
}

export default Description;
