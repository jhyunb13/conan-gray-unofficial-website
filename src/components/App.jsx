import "../assets/App.css";
import Nav from "./Nav";
import Banner from "./Banner";
import ContentContainer from "./ContentContainer";
import { useEffect, useState } from "react";

function App() {
  const [isMainOpen, setIsMainOpen] = useState(true);
  const [clickTour, setClickTour] = useState(false);
  const [clickMerch, setClickMerch] = useState(false);
  const [clickStore, setClickStore] = useState(false);
  const [clickMusic, setClickMusic] = useState(false);
  const [clickListen, setClickListen] = useState(false);

  useEffect(() => {
    if (clickTour || clickStore || clickMusic || clickMerch || clickListen)
      setIsMainOpen(false);

    if (!clickTour && !clickStore && !clickMusic && !clickMerch && !clickListen)
      setIsMainOpen(true);
  }, [clickStore, clickTour, clickMusic, clickMerch, clickListen]);

  return (
    <div className="container">
      <Banner />
      <Nav
        setClickTour={setClickTour}
        setClickStore={setClickStore}
        setClickMusic={setClickMusic}
        setClickMerch={setClickMerch}
        setClickListen={setClickListen}
      />
      <ContentContainer
        isMainOpen={isMainOpen}
        clickTour={clickTour}
        clickStore={clickStore}
        clickMusic={clickMusic}
        clickMerch={clickMerch}
        clickListen={clickListen}
        setClickMusic={setClickMusic}
        setClickStore={setClickStore}
        setClickMerch={setClickMerch}
      />
    </div>
  );
}

export default App;
