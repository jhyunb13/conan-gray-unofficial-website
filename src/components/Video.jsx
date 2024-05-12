import SongInfo from "./SongInfo";
import propTypes from "prop-types";

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
    <div className="video">
      <div className="player-container">
        <div
          className="video-player"
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
