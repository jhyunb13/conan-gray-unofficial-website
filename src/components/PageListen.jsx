import songsData from "../assets/songsData.json";
import Footer from "./Footer";
import Song from "./Song";

function PageListen() {
  return (
    <>
      <div className="listen-page pt-35 pb-50">
        <h1 className="mt-30">Releases</h1>
        <div className="song-list grid-2-col grid-1-col-md">
          {songsData.map((itemData, i) => (
            <Song itemData={itemData} key={i} />
          ))}
        </div>
      </div>
      <Footer social="true" />
    </>
  );
}

export default PageListen;
