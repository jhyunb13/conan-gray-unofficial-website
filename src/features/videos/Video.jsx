import propTypes from "prop-types";

import SongInfo from "../listen/SongInfo";
import styles from "./Video.module.css";

function Video({ video, albumTitle, index }) {
  function extractSongTitle(string, sliceStart, sliceEnd) {
    return string.split(" ").slice(sliceStart, sliceEnd).join(" ");
  }

  function getSongTitle(title) {
    if (title.includes("Official Music Video"))
      return extractSongTitle(title, 3, -3);

    if (title.includes("Official Video")) return extractSongTitle(title, 3, -2);

    return extractSongTitle(title, 3);
  }

  return (
    <div className={styles.video}>
      <div className={styles.playerContainer}>
        <div
          className={styles.videoPlayer}
          id={`video-player-${albumTitle}-${index + 1}`}
        ></div>
      </div>
      <div className="video-info">
        <SongInfo
          title={getSongTitle(video.snippet.title)}
          releaseDate={2020}
        />
      </div>
    </div>
  );
}

Video.propTypes = {
  video: propTypes.object,
  albumTitle: propTypes.string,
  index: propTypes.number,
};

export default Video;
