import propTypes from "prop-types";

import styles from "./Filter.module.css";
import { convertUpperCase } from "../utils/helpers";

function Filter({
  filterName,
  filterOptions,
  handleSettingValue,
  defaultValue = undefined,
}) {
  return (
    <div className={styles.filtering}>
      <div>{convertUpperCase(filterName)}</div>
      <select onChange={handleSettingValue} defaultValue={defaultValue}>
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
