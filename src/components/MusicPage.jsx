import MusicList from "./MusicList";
import Category from "./Category";
import { useState } from "react";

function MusicPage() {
  const [cdClick, setCdClick] = useState(false);
  const [vinylClick, setVinylClick] = useState(false);
  const [cassetteClick, setCassetteClick] = useState(false);

  const category = ["All", "CD", "Vinyl", "Cassette"];

  return (
    <div className="music-page pt-35 pb-50">
      <Category options={category} />
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
