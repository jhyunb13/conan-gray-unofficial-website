import songsData from "../assets/songsData.json";
import Button from "./Button";

function ListenPage() {
  return (
    <div className="pt-35 pb-50">
      <div className="song-list grid-2-col mt-30">
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
      <img src={itemData.cover} alt={itemData.songTitle} />
      <h2>{itemData.songTitle}</h2>
      <Button url={itemData.url}>Listen Now</Button>
    </div>
  );
}

export default ListenPage;
