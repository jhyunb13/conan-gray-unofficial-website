import symbol from "../assets/TifglrGlV2cJ.mp4_snapshot_00.00.002.jpg";
import DayCounter from "./DayCounter";

function MainPage() {
  return (
    <div className="main-page pt-35">
      <img src={symbol} />
      <h1>conan gray ✪ found heaven</h1>
      <p>04/05/2024</p>
      <DayCounter />
    </div>
  );
}

export default MainPage;
