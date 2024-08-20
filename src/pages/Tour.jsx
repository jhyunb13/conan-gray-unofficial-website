import { useState } from "react";

import TourList from "../features/tour-dates/TourList";

function Tour() {
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <main id="tour-page">
      <header>
        <label>
          <h1 className="mb-10">Found Heaven On Tour near you</h1>
          <div className="input">
            <input
              className="input-field"
              type="text"
              placeholder="✪ enter a city or country name"
              value={inputValue}
              onChange={handleInputValue}
            />
          </div>
        </label>
      </header>
      <TourList input={inputValue} />
    </main>
  );
}

export default Tour;
