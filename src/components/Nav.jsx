import propTypes from "prop-types";

function Nav({ setClickTour }) {
  function handleOpeningTour() {
    setClickTour((on) => !on);
  }

  return (
    <nav>
      <div>music</div>
      <div onClick={handleOpeningTour}>tour</div>
      <div>videos</div>
      <div>merch</div>
      <div>sign up</div>
    </nav>
  );
}

Nav.propTypes = {
  setClickTour: propTypes.func,
};

export default Nav;
