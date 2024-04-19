import propTypes from "prop-types";
import BtnMultiuse from "./BtnMultiuse";

function Tour({ tourData }) {
  const dateString = tourData.startDate;
  const date = new Date(dateString);
  const formatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const tourdate = new Intl.DateTimeFormat("en-US", formatOptions).format(date);

  return (
    <div className="tour">
      <div>
        <div className="tour-date mb-10">{tourdate}</div>
        <div>{tourData.location.name}</div>
      </div>
      <span>{tourData.location.address}</span>
      <div>
        <BtnMultiuse url="https://www.conangray.com/">Tickets</BtnMultiuse>
      </div>
    </div>
  );
}

Tour.propTypes = {
  tourData: propTypes.object,
};

export default Tour;
