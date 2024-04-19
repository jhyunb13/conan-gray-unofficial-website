import tourData from "../assets/tourData.json";
import Tour from "./Tour";
import propTypes from "prop-types";

function TourList({ search }) {
  const filteredData = tourData.filter((data) =>
    data.location.address.includes(search)
  );

  return (
    <div>
      {filteredData.map((data) => (
        <Tour tourData={data} key={data.location.name} />
      ))}
    </div>
  );
}

TourList.propTypes = {
  search: propTypes.string,
};

export default TourList;
