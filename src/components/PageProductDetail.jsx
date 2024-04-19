import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import musicData from "../assets/musicData.json";
import merchData from "../assets/merchData.json";
import SelectorQuantity from "./SelectorQuantity";
import SelectorSize from "./SelectorSize";
import BtnMultiuse from "./BtnMultiuse";
import Footer from "./Footer";

function PageProductDetail() {
  const { productId } = useParams();
  const {
    count: [count, setCount],
    cartItem: [itemsInCart, setItemsInCart],
  } = useOutletContext();
  const [correspondingData, setCorrespondingData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("S");

  const footerStyle = { position: "relative", top: "80px" };
  const randomNum = Math.trunc(Math.random() * 10000);
  const regularId = `${
    correspondingData && `${correspondingData.title}-${quantity}-${randomNum}`
  }`;
  const clothingId = `${
    correspondingData &&
    `${correspondingData.title}-${sizeSelected}-${quantity}-${randomNum}`
  }`;

  function handleSubtraction() {
    if (!correspondingData.availability) {
      if (quantity <= 1) return;
      setQuantity((num) => (num -= 1));
    }
  }

  function handleAddition() {
    if (!correspondingData.availability) setQuantity((num) => (num += 1));
  }

  function handleAddToCart() {
    setCount((num) => num + quantity);
    setItemsInCart((item) => {
      return [
        ...item,
        correspondingData.title.includes("TEE") ||
        correspondingData.title.includes("HOODIE") ||
        correspondingData.title.includes("SWEATER")
          ? {
              id: clothingId,
              product: correspondingData,
              size: sizeSelected,
              quantity,
            }
          : {
              id: regularId,
              product: correspondingData,
              quantity,
            },
      ];
    });
  }

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
          <div className="product-title">
            <h1>{correspondingData.title}</h1>
            <div>{correspondingData.price}</div>
            {correspondingData.title.includes("TEE") ||
            correspondingData.title.includes("SWEATER") ||
            correspondingData.title.includes("HOODIE") ? (
              <>
                <SelectorSize
                  sizeSelected={sizeSelected}
                  setSizeSelected={setSizeSelected}
                  correspondingData={correspondingData}
                  availability={correspondingData.availability}
                />
              </>
            ) : null}
            <div className="quantity-selector mt-20 ">
              <div>quantity</div>
              <SelectorQuantity
                availability={correspondingData.availability}
                handleSubtraction={handleSubtraction}
                handleAddition={handleAddition}
              >
                {quantity}
              </SelectorQuantity>
            </div>
            <div className="btn-add-item mt-20">
              {correspondingData.availability ? (
                <BtnMultiuse availability={correspondingData.availability}>
                  {correspondingData.availability.toUpperCase()}
                </BtnMultiuse>
              ) : (
                <BtnMultiuse
                  availability={correspondingData.availability}
                  handleBtnClick={handleAddToCart}
                >
                  {`Add To Cart`.toUpperCase()}
                </BtnMultiuse>
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

export default PageProductDetail;
