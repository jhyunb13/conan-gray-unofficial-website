import { useState } from "react";
import TourList from "./TourList";

function TourPage() {
  const [search, setSearch] = useState("");
  const style = {
    width: "200px",
  };

  function handleSearch(e) {
    const original = e.target.value;
    const capitalized =
      original.slice(0, 1).toUpperCase() + original.slice(1).toLowerCase();

    setSearch(capitalized);
  }

  return (
    <div className="tour-page pt-35 pb-50">
      <h2>Find Found Heaven tour near you</h2>
      <input
        type="text"
        placeholder="enter a city or country name"
        style={style}
        value={search}
        onChange={handleSearch}
      />
      <button>Search</button>
      <TourList search={search} />
    </div>
  );
}

export default TourPage;
