import songsData from "../assets/songsData.json";

function ListenPage() {
  return (
    <div className="song-list scroll">
      {songsData.map((itemData, i) => {
        if (itemData.songTitle) {
          return <Song itemData={itemData} key={i} />;
        }
      })}
    </div>
  );
}

function Song({ itemData }) {
  return (
    <div className="song">
      <img src={itemData.cover} alt={itemData.songTitle} />
      <h3>{itemData.songTitle}</h3>
      <a href={itemData.url} target="_blank">
        <button>Listen Now</button>
      </a>
    </div>
  );
}

export default ListenPage;
