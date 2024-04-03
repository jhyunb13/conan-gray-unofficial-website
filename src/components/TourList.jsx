import tourData from "../assets/tourData.json";
import Tour from "./Tour";
import propTypes from "prop-types";

function TourList({ search }) {
  let data = tourData;
  const filteredData = [];

  tourData.forEach((data) => {
    if (data.location.address.includes(search)) return filteredData.push(data);
  });

  data = filteredData;

  console.log(
    tourData.filter((data) => {
      data.location.address.includes(search);
    })
  );

  return (
    <div>
      {data.map((data) => (
        <Tour tourData={data} key={data.location.name} />
      ))}
    </div>
  );
}

TourList.propTypes = {
  search: propTypes.string,
};

export default TourList;
