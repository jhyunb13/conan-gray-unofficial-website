import propTypes from "prop-types";
import { useLocation } from "react-router-dom";

import socialMediaData from "../data/socialMediaData.json";

function Footer({ style }) {
  const { pathname } = useLocation();

  const footerType = pathname.includes("store") ? "store" : "social-media";
  const socialMediaList = socialMediaData.slice(0, 6);
  const storeList = ["help", "returns", "terms", "privacy police", "contacts"];

  if (footerType === "social-media" && pathname !== "/")
    return (
      <footer id="info-links" style={style}>
        <ul>
          {socialMediaList.map((data) => (
            <a
              href={data.url}
              target="_blank"
              rel="noopener"
              key={data.platform}
            >
              <li>{data.platform}</li>
            </a>
          ))}
        </ul>
      </footer>
    );

  if (footerType === "store")
    return (
      <footer id="info-links" style={style}>
        <ul>
          {storeList.map((content) => (
            <a href="" key={content}>
              <li>{content}</li>
            </a>
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
