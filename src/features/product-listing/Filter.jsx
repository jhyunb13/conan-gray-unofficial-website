import propTypes from "prop-types";

import styles from "./Filter.module.css";

import { convertUpperCase } from "../../utils/helpers";
import { useData } from "../../contexts/DataContext";

function Filter({ filterName, filterOptions, handleSettingValue }) {
  const { currentCategory, currentInventoryStatus } = useData();

  const value =
    filterName === "category" ? currentCategory : currentInventoryStatus;

  return (
    <div className={styles.filtering}>
      <div>{convertUpperCase(filterName)}</div>
      <select onChange={handleSettingValue} value={value}>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

Filter.propTypes = {
  filterName: propTypes.string,
  filterOptions: propTypes.array,
  handleSettingValue: propTypes.func,
  defaultValue: propTypes.string,
};

export default Filter;
