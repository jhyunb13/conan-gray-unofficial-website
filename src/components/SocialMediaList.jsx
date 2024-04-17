import socialMediaData from "../assets/socialMediaData.json";

function SocialMediaList() {
  const modifedData = socialMediaData.slice(0, 6);

  return (
    <ul>
      {modifedData.map((data) => {
        return (
          <li className="social-link" key={data.platform}>
            <a href={data.url} target="_blank" rel="noopener">
              {data.platform}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialMediaList;
