import { useParams, useOutletContext, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SelectorQuantity from "./SelectorQuantity";
import SelectorSize from "./SelectorSize";
import BtnMultiuse from "./BtnMultiuse";
import Footer from "./Footer";
import { nanoid } from "nanoid";

function PageProductDetail() {
  const { productId } = useParams();
  const {
    cartCount: [cartCount, setCartCount],
    cartItem: [itemsInCart, setItemsInCart],
    musicData: [musicData, setMusicData],
    merchData: [merchData, setMerchData],
  } = useOutletContext();
  const capitalizeLetters = useLoaderData();

  const [correspondingData, setCorrespondingData] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("S");

  const footerStyle = { position: "relative", top: "80px" };

  function handleSubtraction() {
    if (correspondingData.soldOut) return;
    if (quantity <= 1) return;
    setQuantity((num) => (num -= 1));
  }

  function handleAddition() {
    if (correspondingData.soldOut) return;
    setQuantity((num) => (num += 1));
  }

  function handleAddToCart() {
    setCartCount((num) => num + quantity);
    setItemsInCart((item) => {
      return [
        ...item,
        correspondingData.title.includes("TEE") ||
        correspondingData.title.includes("HOODIE") ||
        correspondingData.title.includes("SWEATER")
          ? {
              id: nanoid(),
              product: correspondingData,
              size: sizeSelected,
              quantity,
            }
          : {
              id: nanoid(),
              product: correspondingData,
              quantity,
            },
      ];
    });
  }

  function findMatchingData(data, id, stateSetter) {
    data.map((data) => {
      if (
        id ===
        data.title
          .toLowerCase()
          .replace("(", "")
          .replace(")", "")
          .split(" ")
          .join("-")
      )
        stateSetter(data);
    });
  }

  useEffect(() => {
    findMatchingData(merchData[1], productId, setCorrespondingData);
    findMatchingData(musicData[1], productId, setCorrespondingData);
  }, [productId, musicData, merchData]);

  return (
    <>
      {correspondingData && (
        <main className="product-detail-page grid-2-col-lg grid-1-col-md">
          <div className="img-container">
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
                <SelectorSize
                  sizeSelected={sizeSelected}
                  setSizeSelected={setSizeSelected}
                  correspondingData={correspondingData}
                  soldOut={correspondingData.soldOut}
                />
              </>
            ) : null}
            <div className="quantity-selector mt-20 ">
              <div className="selector-title">Quantity</div>
              <SelectorQuantity
                soldOut={correspondingData.soldOut}
                handleSubtraction={handleSubtraction}
                handleAddition={handleAddition}
              >
                {quantity}
              </SelectorQuantity>
            </div>
            {correspondingData.soldOut ? (
              <BtnMultiuse
                soldOut={correspondingData.soldOut}
                classForBtn="btn-add-item"
              >
                {capitalizeLetters(correspondingData.soldOut)}
              </BtnMultiuse>
            ) : (
              <BtnMultiuse
                soldOut={correspondingData.soldOut}
                handleBtnClick={handleAddToCart}
                classForBtn="btn-add-item"
              >
                {capitalizeLetters(`Add To Cart`)}
              </BtnMultiuse>
            )}
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
        </main>
      )}
      <Footer style={footerStyle} />
    </>
  );
}

export default PageProductDetail;
