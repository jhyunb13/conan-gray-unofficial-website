import propTypes from "prop-types";

function SongInfo({ title, releaseDate }) {
  return (
    <>
      <h2 className="albumTitle">{title}</h2>
      <div className="year">{releaseDate}</div>
    </>
  );
}

SongInfo.propTypes = {
  title: propTypes.string,
  releaseDate: propTypes.number,
};

export default SongInfo;
