import merchData from "../assets/merchData.json";
import MusicItem from "./MusicItem";

function MerchPage() {
  return (
    <div className="merch-page">
      {merchData.map((itemData) => (
        <MusicItem itemData={itemData} key={itemData.title} />
      ))}
    </div>
  );
}

export default MerchPage;
