import propTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./BtnRound.module.scss";

import { useData } from "../contexts/DataContext";
import { convertUpperCase } from "../utils/helpers";

function BtnRound({ children, onClick, type, textContent, element }) {
  const { soldOut } = useData();

  const newParam = new URLSearchParams([["page", "1"]]).toString();

  function handleScrollTo() {
    element.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  if (type === "scroll")
    return (
      <button className={styles.btnScroll} onClick={handleScrollTo}>
        <h2>{textContent}</h2>
      </button>
    );

  if (type === "empty-cart")
    return (
      <Link to={`/store?${newParam}`} className={styles.btnToStore}>
        {convertUpperCase(`Continue Shopping`)}
      </Link>
    );

  if (type === "sold-out" && soldOut)
    return (
      <button className={styles.btnSoldOut} disabled onClick={onClick}>
        {children}
      </button>
    );

  if (type === "add-to-cart" && !soldOut)
    return (
      <button className={styles.btnAddItem} onClick={onClick}>
        {children}
      </button>
    );

  if (type === "tour-ticket")
    return (
      <a
        className={styles.btnTicket}
        href="https://www.conangray.com/"
        target="_blank"
        rel="noopener"
      >
        {children}
      </a>
    );

  if (type === "notification")
    return (
      <a
        className={styles.btnToOfficial}
        href="https://www.conangray.com/"
        target="_blank"
        rel="noopener"
      >
        {convertUpperCase(`go to the official website`)}
      </a>
    );

  if (type === "checkout")
    return (
      <button className={styles.checkout} onClick={onClick}>
        {convertUpperCase(`Continue To Check Out`)}
      </button>
    );
}

BtnRound.propTypes = {
  children: propTypes.string,
  type: propTypes.string,
  soldOut: propTypes.string,
  onClick: propTypes.func,
  classForBtn: propTypes.string,
};

export default BtnRound;
