import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import musicData from "../assets/musicData.json";
import merchData from "../assets/merchData.json";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";
import Button from "./Button";
import Footer from "./Footer";

function ProductDetailPage() {
  const { productId } = useParams();
  const {
    count: [count, setCount],
    cartItem: [itemsInCart, setItemsInCart],
  } = useOutletContext();
  const [correspondingData, setCorrespondingData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("S");

  const footerStyle = { position: "relative", top: "80px" };

  useEffect(() => {
    function getData() {
      musicData.forEach((data) => {
        if (
          productId ===
          data.title
            .toLowerCase()
            .replace("(", "")
            .replace(")", "")
            .split(" ")
            .join("-")
        )
          setCorrespondingData(data);
      });

      merchData.forEach((data) => {
        if (
          productId ===
          data.title
            .toLowerCase()
            .replace("(", "")
            .replace(")", "")
            .split(" ")
            .join("-")
        )
          setCorrespondingData(data);
      });
    }

    getData();
  }, [productId]);

  return (
    <>
      {correspondingData && (
        <div className="product-detail-page grid-2-col pt-35 pb-50">
          <div>
            <img
              src={`https:${correspondingData.img}`}
              alt={correspondingData.title}
            />
          </div>
          <div className="product-detail">
            <h1>{correspondingData.title}</h1>
            <div>{correspondingData.price}</div>
            {correspondingData.title.includes("TEE") ||
            correspondingData.title.includes("SWEATER") ||
            correspondingData.title.includes("HOODIE") ? (
              <>
                <SizeSelector
                  sizeSelected={sizeSelected}
                  setSizeSelected={setSizeSelected}
                  correspondingData={correspondingData}
                  availability={correspondingData.availability}
                />
              </>
            ) : null}
            <div className="quantity-selector mt-20 ">
              <div>quantity</div>
              <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
                availability={correspondingData.availability}
              >
                {quantity}
              </QuantitySelector>
            </div>
            <div className="btn-add-item mt-20">
              {correspondingData.availability ? (
                <Button availability={correspondingData.availability}>
                  {correspondingData.availability.toUpperCase()}
                </Button>
              ) : (
                <Button
                  setCount={setCount}
                  setItemsInCart={setItemsInCart}
                  correspondingData={correspondingData}
                  quantity={quantity}
                  sizeSelected={sizeSelected}
                  availability={correspondingData.availability}
                >
                  {`Add To Cart`.toUpperCase()}
                </Button>
              )}
            </div>
            <p className="description">
              This is not the official website of conan gray. If you want to
              purchase the product, please{" "}
              <a
                href={`https://shop.conangray.com/${correspondingData.url}`}
                target="_blank"
                rel="noopener"
                className="click-here"
              >
                click here
              </a>
            </p>
          </div>
        </div>
      )}
      <Footer style={footerStyle} />
    </>
  );
}

export default ProductDetailPage;
