import propTypes from "prop-types";

import BtnMultiuse from "../../ui/BtnMultiuse";
import styles from "./Tour.module.css";

function Tour({ tourData }) {
  const dateString = tourData.startDate;
  const tourDate = new Date(dateString);
  const today = new Date();
  const formatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedTourdate = new Intl.DateTimeFormat(
    "en-US",
    formatOptions
  ).format(tourDate);

  if (today <= tourDate)
    return (
      <div className={styles.tour}>
        <div className="tour-date-venue">
          <div className={styles.tourDate}>{formattedTourdate}</div>
          <div>{tourData.location.name}</div>
        </div>
        <div className="tour-city">{tourData.location.address}</div>
        <BtnMultiuse
          url="https://www.conangray.com/"
          classForBtn="btn-ticket-link"
          type="tour-ticket"
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
