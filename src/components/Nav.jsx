import propTypes from "prop-types";

function Nav({
  setClickTour,
  setClickStore,
  setClickMusic,
  setClickMerch,
  setClickListen,
}) {
  function handleOpenTour() {
    setClickTour((on) => !on);
    setClickStore(false);
    setClickMusic(false);
    setClickMerch(false);
    setClickListen(false);
  }

  function handleOpenStore() {
    setClickStore((on) => !on);
    setClickTour(false);
    setClickMusic(false);
    setClickMerch(false);
    setClickListen(false);
  }

  function handleOpenListen() {
    setClickListen((on) => !on);
    setClickTour(false);
    setClickMusic(false);
    setClickMerch(false);
    setClickStore(false);
  }

  return (
    <nav>
      <div onClick={handleOpenListen}>listen</div>
      <a href="https://www.youtube.com/@ConanGray/featured" target="_blank">
        <div>videos</div>
      </a>
      <div onClick={handleOpenTour}>tour</div>
      <div onClick={handleOpenStore}>store</div>
      <div>sign up</div>
    </nav>
  );
}

Nav.propTypes = {
  setClickTour: propTypes.func,
  setClickStore: propTypes.func,
  setClickMusic: propTypes.func,
  setClickMerch: propTypes.func,
  setClickListen: propTypes.func,
};

export default Nav;
