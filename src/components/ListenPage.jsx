import songsData from "../assets/songsData.json";
import Button from "./Button";

function ListenPage() {
  return (
    <div className="listen-page pt-35 pb-50">
      <h1 className="mt-30">Releases</h1>
      <div className="song-list grid-2-col grid-1-col-md">
        {songsData.map((itemData, i) => {
          if (itemData.songTitle) {
            return <Song itemData={itemData} key={i} />;
          }
        })}
      </div>
    </div>
  );
}

function Song({ itemData }) {
  return (
    <div className="song">
      <a href={itemData.url} target="_blank" className="no-link-style">
        <img src={itemData.cover} alt={itemData.songTitle} />
        <h2>{itemData.songTitle}</h2>
        <div>{itemData.release}</div>
      </a>
    </div>
  );
}

export default ListenPage;
