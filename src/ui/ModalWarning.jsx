import { useEffect, useRef } from "react";
import propTypes from "prop-types";

import BtnRound from "./BtnRound";
import styles from "./ModalWarning.module.scss";

function ModalWarning({ closeAlert, setCloseAlert }) {
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
      className={closeAlert ? styles.warningHidden : styles.warning}
      onClick={handleCloserAlert2}
      ref={warningEl}
    >
      <div className={styles.warningModal}>
        <button className={styles.btnClose} onClick={handleCloseAlert1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.iconX}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className={styles.content}>
          <h3>Important Notice</h3>
          <p>
            This is not the official website of Conan Gray. If you want to
            purchase the products, please click the button below.
          </p>
          <BtnRound type="notification" />
        </div>
      </div>
    </div>
  );
}

ModalWarning.propTypes = {
  closeAlert: propTypes.bool,
  setCloseAlert: propTypes.func,
};

export default ModalWarning;
