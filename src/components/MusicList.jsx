import musicData from "../assets/musicData.json";
import Item from "./Item";
import propTypes from "prop-types";
import { useState, useEffect } from "react";

function MusicList({
  cdClick,
  vinylClick,
  cassetteClick,
  setCdClick,
  setVinylClick,
  setCassetteClick,
}) {
  const [data, setData] = useState(musicData);

  useEffect(() => {
    if (cdClick) {
      setData(
        musicData.filter((music) => {
          return music.title.includes("CD");
        })
      );

      setVinylClick(false);
      setCassetteClick(false);
    }

    if (vinylClick) {
      setData(
        musicData.filter((music) => {
          return music.title.includes("LP");
        })
      );

      setCassetteClick(false);
      setCdClick(false);
    }

    if (cassetteClick) {
      setData(
        musicData.filter((music) => {
          return music.title.includes("Cassette");
        })
      );

      setCdClick(false);
      setVinylClick(false);
    }

    if (!cdClick && !vinylClick && !cassetteClick) setData(musicData);
  }, [cdClick, vinylClick, cassetteClick]);

  return (
    <div className="music-list">
      {data.map((itemData) => {
        return <Item itemData={itemData} key={itemData.title} />;
      })}
    </div>
  );
}

MusicList.propTypes = {
  musicData: propTypes.array,
};

export default MusicList;
