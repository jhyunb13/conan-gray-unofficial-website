// import musicData from "../assets/musicData.json";
import Item from "./Item";
import propTypes from "prop-types";
import { useState, useEffect } from "react";

function ProductList({
  content,
  cdClick,
  vinylClick,
  cassetteClick,
  setCdClick,
  setVinylClick,
  setCassetteClick,
}) {
  const [data, setData] = useState(content);

  useEffect(() => {
    if (cdClick) {
      setData(
        content.filter((music) => {
          return music.title.includes("CD");
        })
      );

      setVinylClick(false);
      setCassetteClick(false);
    }

    if (vinylClick) {
      setData(
        content.filter((music) => {
          return music.title.includes("LP");
        })
      );

      setCassetteClick(false);
      setCdClick(false);
    }

    if (cassetteClick) {
      setData(
        content.filter((music) => {
          return music.title.includes("Cassette");
        })
      );

      setCdClick(false);
      setVinylClick(false);
    }

    if (!cdClick && !vinylClick && !cassetteClick) setData(content);
  }, [cdClick, vinylClick, cassetteClick]);

  return (
    <div className="music-list grid-3-col grid-1-col-sm grid-2-col-md grid-4-row grid-6-row-md grid-12-row-sm">
      {content.map((itemData, i) => {
        return <Item itemData={itemData} key={`${itemData.title}-${i}`} />;
      })}
    </div>
  );
}

ProductList.propTypes = {
  content: propTypes.array,
};

export default ProductList;
