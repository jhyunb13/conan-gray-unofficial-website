import propTypes from "prop-types";

import SongInfo from "./SongInfo";
import styles from "./Song.module.css";

function Song({ itemData }) {
  return (
    <a
      className={styles.song}
      href={itemData.url}
      target="_blank"
      rel="noopener"
    >
      <img src={itemData.cover} alt={itemData.songTitle} />
      <SongInfo title={itemData.songTitle} releaseDate={itemData.release} />
    </a>
  );
}

Song.propTypes = {
  itemData: propTypes.object,
};

export default Song;
