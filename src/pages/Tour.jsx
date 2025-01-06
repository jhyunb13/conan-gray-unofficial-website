import { useState } from "react";

import TourList from "../features/tour-dates/TourList";
import styles from "./Tour.module.scss";

function Tour() {
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <header>
        <label className={styles.searchCity}>
          <h2>Found Heaven On Tour near you</h2>
          <input
            className={styles.searchField}
            type="text"
            placeholder="✪ enter a city or country name"
            value={inputValue}
            onChange={handleInputValue}
          />
        </label>
      </header>
      <TourList input={inputValue} />
    </>
  );
}

export default Tour;
