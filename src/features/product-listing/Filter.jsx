import propTypes from "prop-types";

import styles from "./Filter.module.css";

import { convertUpperCase } from "../../utils/helpers";
import { useQueryString } from "../../hooks/useQueryString";

function Filter({ filterName, filterOptions, handleSettingValue }) {
  const { getQueryString } = useQueryString();

  const currentCategory = getQueryString("category");
  const currentInventoryStatus = getQueryString("status");

  const value =
    filterName === "category" ? currentCategory : currentInventoryStatus;

  return (
    <div className={styles.filtering}>
      <div>{convertUpperCase(filterName)}</div>
      <select onChange={handleSettingValue} defaultValue={value} key={value}>
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
