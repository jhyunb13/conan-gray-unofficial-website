import symbol from "../assets/TifglrGlV2cJ.mp4_snapshot_00.00.002.png";

function PageMain() {
  return (
    <div className="main-page pt-35">
      <img src={symbol} />
      <h1>conan gray ✪ found heaven</h1>
      <iframe
        className="spotify"
        style={{ borderRadius: "12px", marginTop: "20px" }}
        src="https://open.spotify.com/embed/album/39gMxRpFKgIVvw3krIIam5?utm_source=generator"
        width="40%"
        height="200"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default PageMain;
