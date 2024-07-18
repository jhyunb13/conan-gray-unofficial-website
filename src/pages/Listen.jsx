import songsData from "../data/songsData.json";
import Song from "../features/listen/Song";

function Listen() {
  return (
    <main id="listen-page">
      <header>
        <h1>Releases</h1>
      </header>
      <div id="song-list" className="grid-2-col-lg grid-1-col-md">
        {songsData.map((itemData, i) => (
          <Song itemData={itemData} key={i} />
        ))}
      </div>
    </main>
  );
}

export default Listen;
