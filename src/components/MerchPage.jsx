import merchData from "../assets/merchData.json";
import Category from "./Category";
import Item from "./Item";

function MerchPage() {
  return (
    <div className="merch-page pt-35 pb-50">
      <Category />
      <div className="merch-list">
        {merchData.map((itemData) => (
          <Item itemData={itemData} key={itemData.title} />
        ))}
      </div>
    </div>
  );
}

export default MerchPage;
