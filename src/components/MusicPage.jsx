import MusicList from "./MusicList";
import Filter from "./Filter";
import { useState } from "react";

function MusicPage() {
  const [cdClick, setCdClick] = useState(false);
  const [vinylClick, setVinylClick] = useState(false);
  const [cassetteClick, setCassetteClick] = useState(false);

  return (
    <div className="music-page">
      <div className="filters">
        <Filter setClick={setCdClick}>CD</Filter>
        <Filter setClick={setVinylClick}>Vinyl</Filter>
        <Filter setClick={setCassetteClick}>Cassette</Filter>
      </div>
      <MusicList
        cdClick={cdClick}
        vinylClick={vinylClick}
        cassetteClick={cassetteClick}
        setCdClick={setCdClick}
        setVinylClick={setVinylClick}
        setCassetteClick={setCassetteClick}
      />
    </div>
  );
}

export default MusicPage;
