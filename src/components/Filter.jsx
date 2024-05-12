import { useLoaderData } from "react-router-dom";
import propTypes from "prop-types";

function Filter({
  filterName,
  filterOptions,
  handleSettingValue,
  defaultValue = undefined,
}) {
  const capitalizeLetters = useLoaderData();

  return (
    <div className="filtering">
      <div>{capitalizeLetters(filterName)}</div>
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
