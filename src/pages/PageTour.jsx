import { useState } from "react";
import TourList from "../components/TourList";
import Footer from "../components/Footer";

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
      <main id="tour-page">
        <header>
          <h1 className="mb-10">Find Found Heaven tour near you</h1>
          <input
            className="input-field"
            type="text"
            placeholder="✪ enter a city or country name"
            value={search}
            onChange={handleSearch}
          />
        </header>
        <TourList search={search} />
      </main>
      <Footer social="true" />
    </>
  );
}

export default PageTour;
