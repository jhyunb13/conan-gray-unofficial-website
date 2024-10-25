import propTypes from "prop-types";
import { useLocation } from "react-router-dom";

import socialMediaData from "../data/socialMediaData.json";
import styles from "./Footer.module.css";

function Footer({ style }) {
  const { pathname } = useLocation();

  const footerType = pathname.includes("store") ? "store" : "social-media";
  const socialMediaList = socialMediaData.slice(0, 6);
  const storeList = ["help", "returns", "terms", "privacy police", "contacts"];

  if (footerType === "social-media")
    return (
      <footer className={styles.infoLinks} style={style}>
        <ul>
          {socialMediaList.map((data) => (
            <li key={data.platform}>
              <a
                className={styles.link}
                href={data.url}
                target="_blank"
                rel="noopener"
              >
                {data.platform}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    );

  if (footerType === "store")
    return (
      <footer className={styles.infoLinks} style={style}>
        <ul>
          {storeList.map((content) => (
            <li key={content}>
              <a className={styles.link} href="">
                {content}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    );
}

Footer.propTypes = {
  social: propTypes.string,
  style: propTypes.object,
};

export default Footer;
