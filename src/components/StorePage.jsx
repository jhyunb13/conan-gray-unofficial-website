import Category from "./Category";
import MusicList from "./MusicList";

function StorePage({ setClickMusic, setClickStore, setClickMerch }) {
  return (
    <div className="store-page">
      <div className="filters">
        <Category
          setClickOther={setClickMerch}
          setClick={setClickMusic}
          setClickStore={setClickStore}
        >
          Music
        </Category>
        <Category
          setClick={setClickMerch}
          setClickOther={setClickMusic}
          setClickStore={setClickStore}
        >
          Merch
        </Category>
      </div>
      <MusicList />
    </div>
  );
}

export default StorePage;
