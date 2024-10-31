import { useEffect, useState, useRef } from "react";

import VideoList from "../features/videos/VideoList";
import BtnScrollToSection from "../ui/BtnScrollToSection";
import styles from "./Videos.module.css";

import { useYoutube } from "../hooks/useYoutube";

function Videos() {
  const [allVideosPlaylist, setAllVideosPlaylist] = useState([]);
  const [foundHeavenPlaylist, setFoundHeavenPlaylist] = useState([]);
  const [superachePlaylist, setSuperachePlaylist] = useState([]);

  const foundHeavenElement = useRef(null);
  const superacheElement = useRef(null);
  const kidKrowElement = useRef(null);

  const { isLoading, videoLists } = useYoutube();

  useEffect(() => {
    if (videoLists) {
      setAllVideosPlaylist(videoLists[0].items);
      setFoundHeavenPlaylist(videoLists[1].items);
      setSuperachePlaylist(videoLists[2].items);
    }
  }, [videoLists]);

  return (
    <>
      <header className={styles.submenu}>
        <BtnScrollToSection
          textContent="Found Heaven"
          element={foundHeavenElement}
        />
        <BtnScrollToSection
          textContent="Superache"
          element={superacheElement}
        />
        <BtnScrollToSection textContent="Kid Krow" element={kidKrowElement} />
      </header>
      {isLoading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.videoList}>
          <VideoList
            elementId="found-heaven"
            playlist={foundHeavenPlaylist}
            albumTitle="fh"
            element={foundHeavenElement}
          />
          <VideoList
            elementId="superache"
            playlist={superachePlaylist}
            albumTitle="s"
            element={superacheElement}
          />
          <VideoList
            elementId="kid-krow"
            playlist={allVideosPlaylist}
            albumTitle="kk"
            element={kidKrowElement}
          />
        </div>
      )}
    </>
  );
}

export default Videos;
