import { useData } from "../contexts/DataContext";

function Description() {
  const { currentProduct } = useData();
  const url = currentProduct.url;

  return (
    <p className="description">
      This is not the official website of conan gray. If you want to purchase
      the product, please{" "}
      <a
        href={`https://shop.conangray.com/${url}`}
        target="_blank"
        rel="noopener"
        className="click-here"
      >
        click here
      </a>
    </p>
  );
}

export default Description;
