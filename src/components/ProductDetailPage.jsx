import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import musicData from "../assets/musicData.json";
import merchData from "../assets/merchData.json";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";
import Button from "./Button";

function ProductDetailPage() {
  const { productId } = useParams();
  const {
    count: [count, setCount],
    cartItem: [itemsInCart, setItemsInCart],
  } = useOutletContext();
  const [correspondingData, setCorrespondingData] = useState(null);
  const [quantity, setQuantity] = useState(1);

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
        <div className="product-detail-page pt-35 pb-50">
          <div>
            <img
              src={`https:${correspondingData.img}`}
              alt={correspondingData.title}
            />
          </div>
          <div className="product-detail">
            <h2>{correspondingData.title}</h2>
            <div>{correspondingData.price}</div>
            {correspondingData.title.includes("TEE") ||
              correspondingData.title.includes("SWEATER") ||
              (correspondingData.title.includes("HOODIE") && (
                <>
                  <SizeSelector />
                </>
              ))}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <div className="btn-add-item mt-20">
              {correspondingData.availability ? (
                <Button availability={correspondingData.availability}>
                  {correspondingData.availability}
                </Button>
              ) : (
                <Button
                  url={`https://shop.conangray.com/${correspondingData.url}`}
                  setCount={setCount}
                  setItemsInCart={setItemsInCart}
                  correspondingData={correspondingData}
                  quantity={quantity}
                >
                  Add To Cart
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetailPage;
