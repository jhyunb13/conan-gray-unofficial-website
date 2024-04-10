import socialMediaData from "../assets/socialMediaData.json";

function InfoPage() {
  return (
    <div className="info-page pt-35 pb-50">
      <h1 className="mt-30">coming soon</h1>
      <img
        src="https://www.onitsukatiger.com/jp/magazine/wp-content/uploads/2024/01/p3.jpg"
        alt="Conan Gray"
      />
      <SocialMediaList />
    </div>
  );
}

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

export default InfoPage;
