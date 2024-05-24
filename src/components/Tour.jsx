import propTypes from "prop-types";
import BtnMultiuse from "./BtnMultiuse";
import styles from "./Tour.module.css";

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
    <div className={styles.tour}>
      <div className="tour-date-venue">
        <div className={styles.tourDate}>{tourdate}</div>
        <div>{tourData.location.name}</div>
      </div>
      <div className="tour-city">{tourData.location.address}</div>
      <BtnMultiuse
        url="https://www.conangray.com/"
        classForBtn="btn-ticket-link"
      >
        Tickets
      </BtnMultiuse>
    </div>
  );
}

Tour.propTypes = {
  tourData: propTypes.object,
};

export default Tour;
