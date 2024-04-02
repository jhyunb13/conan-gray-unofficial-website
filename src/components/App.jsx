import "../assets/App.css";
import Nav from "./Nav";
import Banner from "./Banner";
import symbol from "../assets/TifglrGlV2cJ.mp4_snapshot_00.00.002.jpg";

function App() {
  return (
    <div className="container">
      <Banner />
      <Nav />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <img src={symbol} />
    </div>
  );
}

function Main() {}

export default App;
