import propTypes from "prop-types";
import SongInfo from "./SongInfo";

function Song({ itemData }) {
  return (
    <div className="song">
      <a href={itemData.url} target="_blank" className="no-link-style">
        <img src={itemData.cover} alt={itemData.songTitle} />
        <SongInfo title={itemData.songTitle} releaseDate={itemData.release} />
      </a>
    </div>
  );
}

Song.propTypes = {
  itemData: propTypes.object,
};

export default Song;
