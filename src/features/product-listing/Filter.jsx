import propTypes from "prop-types";

import styles from "./Filter.module.scss";

import { convertUpperCase } from "../../utils/helpers";
import { useQueryString } from "../../hooks/useQueryString";

function Filter({ filterName, filterOptions, handleSettingValue }) {
  const { getQueryString } = useQueryString();

  const currentCategory = getQueryString("category");
  const currentInventoryStatus = getQueryString("status");

  const value =
    filterName === "category" ? currentCategory : currentInventoryStatus;

  return (
    <div className={styles.filter}>
      <div>{convertUpperCase(filterName)}</div>
      <div className={styles.selectContainer}>
        <select onChange={handleSettingValue} defaultValue={value} key={value}>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={styles.iconArrow}
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
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
