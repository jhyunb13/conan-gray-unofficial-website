import propTypes from "prop-types";
import MainPage from "./MainPage";
import TourPage from "./TourPage";
import StorePage from "./StorePage";
import MusicPage from "./MusicPage";
import MerchPage from "./MerchPage";
import ListenPage from "./ListenPage";

function ContentContainer({
  isMainOpen,
  clickTour,
  clickStore,
  clickMusic,
  clickMerch,
  clickListen,
  setClickMusic,
  setClickStore,
  setClickMerch,
}) {
  return (
    <>
      {isMainOpen && <MainPage />}
      {clickTour && <TourPage />}
      {clickStore && (
        <StorePage
          setClickMusic={setClickMusic}
          setClickStore={setClickStore}
          setClickMerch={setClickMerch}
        />
      )}
      {clickMusic && <MusicPage />}
      {clickMerch && <MerchPage />}
      {clickListen && <ListenPage />}
    </>
  );
}

ContentContainer.propTypes = {
  isMainOpen: propTypes.bool,
  clickTour: propTypes.bool,
  clickStore: propTypes.bool,
};

export default ContentContainer;
