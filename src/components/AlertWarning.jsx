import propTypes from "prop-types";
import BtnMultiuse from "./BtnMultiuse";
import styles from "./AlertWarning.module.css";
import { useEffect, useRef } from "react";

function AlertWarning({ closeAlert, setCloseAlert }) {
  const warningEl = useRef(null);

  function handleCloseAlert1() {
    setCloseAlert(true);
  }

  function handleCloserAlert2(e) {
    e.target.classList.contains(styles.warning) && setCloseAlert(true);
  }

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        !warningEl.current.classList.contains("hidden")
      ) {
        setCloseAlert(true);
        warningEl.current.classList.add("hidden");
      }
    });
  }, [setCloseAlert]);

  return (
    <div
      className={closeAlert ? `${styles.warning} hidden` : styles.warning}
      onClick={handleCloserAlert2}
      ref={warningEl}
    >
      <div className={styles.warningText}>
        <button className={styles.btnClose} onClick={handleCloseAlert1}>
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
          <BtnMultiuse
            url="https://shop.conangray.com/?utm_campaign=nav&utm_medium=referral&utm_source=conangray.com"
            classForBtn={"btn-to-official-website"}
          >
            {`go to the official website`.toUpperCase()}
          </BtnMultiuse>
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
