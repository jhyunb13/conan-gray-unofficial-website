import propTypes from "prop-types";

import tourData from "../../data/tourData.json";
import Tour from "./Tour";
import AlertNoResult from "../../ui/AlertNoResult";

function TourList({ input }) {
  const capitalizedInput =
    input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase();
  const filteredData = tourData.filter((data) =>
    data.location.address.includes(capitalizedInput)
  );

  if (input && !filteredData.length)
    return (
      <AlertNoResult dataAvail={filteredData.length}>
        No result found
      </AlertNoResult>
    );

  if (!tourData.length)
    return <AlertNoResult>No shows at the moment</AlertNoResult>;

  return (
    <div className="tour-list">
      {filteredData.map((data, i) => (
        <Tour tourData={data} key={`${data.location.name}-${i}`} />
      ))}
    </div>
  );
}

TourList.propTypes = {
  search: propTypes.string,
};

export default TourList;
