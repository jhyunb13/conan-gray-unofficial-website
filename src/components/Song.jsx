import SongInfo from "./SongInfo";

function Song({ itemData }) {
  return (
    <div className="song">
      <a href={itemData.url} target="_blank" className="no-link-style">
        <img src={itemData.cover} alt={itemData.songTitle} />
        <SongInfo>{[itemData.songTitle, itemData.release]}</SongInfo>
      </a>
    </div>
  );
}

export default Song;
