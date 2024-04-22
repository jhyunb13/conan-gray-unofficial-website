import propTypes from "prop-types";
import Button from "./BtnMultiuse";

function AlertWarning({ closeAlert, setCloseAlert }) {
  function handleAlertClose() {
    setCloseAlert(true);

    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        !document.querySelector(".warning").classList.contains("hidden")
      ) {
        setCloseAlert(true);
        document.querySelector(".warning").classList.add("hidden");
      }
    });
  }

  return (
    <div className={closeAlert ? "warning hidden" : "warning"}>
      <div className="warning-text">
        <button className="btn-close" onClick={handleAlertClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <div>
          <h1>✪ important notice ✪</h1>
          <p>
            This is not the official website of Conan Gray. If you want to
            purchase the products, please click the button below.
          </p>
          <Button url="https://shop.conangray.com/?utm_campaign=nav&utm_medium=referral&utm_source=conangray.com">
            {`go to the official website`.toUpperCase()}
          </Button>
        </div>
      </div>
    </div>
  );
}

AlertWarning.propTypes = {
  closeAlert: propTypes.bool,
  setCloseAlert: propTypes.func,
};

export default AlertWarning;
