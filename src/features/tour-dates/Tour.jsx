import propTypes from "prop-types";

import BtnRound from "../../ui/BtnRound";
import styles from "./Tour.module.scss";

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

  // if (today <= tourDate)
  return (
    <div className={styles.tour}>
      <div className={styles.venue}>
        <div className={styles.tourDate}>{formattedTourdate}</div>
        <div>{tourData.location.name}</div>
      </div>
      <div className={styles.city}>{tourData.location.address}</div>
      <BtnRound type="tour-ticket">Tickets</BtnRound>
    </div>
  );
}

Tour.propTypes = {
  tourData: propTypes.object,
};

export default Tour;
