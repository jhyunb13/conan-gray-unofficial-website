import "../assets/App.css";
import Nav from "./Nav";
import Banner from "./Banner";
import ContentContainer from "./ContentContainer";
import { useState } from "react";

function App() {
  const [clickTour, setClickTour] = useState(false);

  return (
    <div className="container">
      <Banner />
      <Nav setClickTour={setClickTour} />
      <ContentContainer clickTour={clickTour} />
    </div>
  );
}

export default App;
