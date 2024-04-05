import merchData from "../assets/merchData.json";
import MusicItem from "./MusicItem";
import Category from "./Category";

function MerchPage() {
  return (
    <div className="merch-page pt-35 pb-50">
      <Category />
      <div className="merch-list">
        {merchData.map((itemData) => (
          <MusicItem itemData={itemData} key={itemData.title} />
        ))}
      </div>
    </div>
  );
}

export default MerchPage;
