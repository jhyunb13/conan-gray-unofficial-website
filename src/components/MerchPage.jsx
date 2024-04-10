import merchData from "../assets/merchData.json";
import Category from "./Category";
import Item from "./Item";

function MerchPage() {
  const category = ["Tops", "Outerwear", " Accessories"];

  return (
    <div className="merch-page pt-35 pb-50">
      <Category options={category} />
      <div className="merch-list grid-3-col grid-1-col-sm grid-2-col-md">
        {merchData.map((itemData) => (
          <Item itemData={itemData} key={itemData.title} />
        ))}
      </div>
    </div>
  );
}

export default MerchPage;
