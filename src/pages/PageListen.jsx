import songsData from "../assets/songsData.json";
import Footer from "../components/Footer";
import Song from "../components/Song";

function PageListen() {
  return (
    <>
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
      <Footer social="true" />
    </>
  );
}

export default PageListen;
