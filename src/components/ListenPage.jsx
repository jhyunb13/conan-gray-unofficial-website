import songsData from "../assets/songsData.json";

function ListenPage() {
  return (
    <div className="pt-35 pb-50">
      <div className="song-list">
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
      <h3>{itemData.songTitle}</h3>
      <a href={itemData.url} target="_blank" rel="noopener">
        <button>Listen Now</button>
      </a>
    </div>
  );
}

export default ListenPage;
