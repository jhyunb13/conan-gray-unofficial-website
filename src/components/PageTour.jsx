import { useState } from "react";
import TourList from "./TourList";
import Footer from "./Footer";

function PageTour() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    const original = e.target.value;
    const capitalized =
      original.slice(0, 1).toUpperCase() + original.slice(1).toLowerCase();

    setSearch(capitalized);
  }

  return (
    <>
      <div className="tour-page pt-35 pb-50">
        <div className="center-align mt-30">
          <h1 className="mb-10">Find Found Heaven tour near you</h1>
          <input
            className="input-field"
            type="text"
            placeholder="✪ enter a city or country name"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <TourList search={search} />
      </div>
      <Footer social="true" />
    </>
  );
}

export default PageTour;
