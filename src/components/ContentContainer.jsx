import MainPage from "./MainPage";
import TourPage from "./TourPage";
import propTypes from "prop-types";

function ContentContainer({ clickTour }) {
  return <>{clickTour ? <TourPage /> : <MainPage />}</>;
}

ContentContainer.propTypes = {
  clickTour: propTypes.bool,
};

export default ContentContainer;
