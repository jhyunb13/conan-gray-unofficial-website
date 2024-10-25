import propTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./BtnMultiuse.module.css";

import { useData } from "../contexts/DataContext";
import { convertUpperCase } from "../utils/helpers";

function BtnMultiuse({ children, onClick, type }) {
  const { soldOut } = useData();

  const newParam = new URLSearchParams([["page", "1"]]).toString();

  if (type === "empty-cart")
    return (
      <Link to={`/store?${newParam}`}>
        <button className={`${styles.btn} ${styles.btnToStore} mt-20`}>
          {convertUpperCase(`Continue Shopping`)}
        </button>
      </Link>
    );

  if (type === "sold-out" && soldOut)
    return (
      <button
        className={`${styles.btnAddItem} ${styles.btnSoldOut}`}
        disabled
        onClick={onClick}
      >
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
        <button className={styles.btn} onClick={onClick}>
          {children}
        </button>
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
        <button className={styles.btn} onClick={onClick}>
          {convertUpperCase(`go to the official website`)}
        </button>
      </a>
    );

  if (type === "checkout")
    return (
      <button className={styles.checkout} onClick={onClick}>
        {convertUpperCase(`Continue To Check Out`)}
      </button>
    );
}

BtnMultiuse.propTypes = {
  children: propTypes.string,
  type: propTypes.string,
  soldOut: propTypes.string,
  onClick: propTypes.func,
  classForBtn: propTypes.string,
};

export default BtnMultiuse;
