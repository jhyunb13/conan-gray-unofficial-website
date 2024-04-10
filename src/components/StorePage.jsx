import Category from "./Category";
import MusicList from "./MusicList";

function StorePage() {
  const category = ["All", "CD", "Vinyl", "Cassette", "Merch"];

  return (
    <div className="store-page pt-35 pb-50">
      <Category options={category} />
      <MusicList />
    </div>
  );
}

export default StorePage;
