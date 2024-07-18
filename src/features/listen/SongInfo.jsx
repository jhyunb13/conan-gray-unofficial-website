import propTypes from "prop-types";

function SongInfo({ title, releaseDate }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="song-info">{releaseDate}</div>
    </>
  );
}

SongInfo.propTypes = {
  title: propTypes.string,
  releaseDate: propTypes.number,
};

export default SongInfo;
