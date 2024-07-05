import { useEffect, useState, useRef } from "react";

import Footer from "../ui/Footer";
import VideoList from "../components/VideoList";
import BtnScrollToSection from "../components/BtnScrollToSection";

import { useYoutube } from "../hooks/useYoutube";

function PageVideos() {
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

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <main id="video-page">
        <header id="video-menu">
          <BtnScrollToSection
            textContent="Found Heaven"
            element={foundHeavenElement}
          />
          <h1>/</h1>
          <BtnScrollToSection
            textContent="Superache"
            element={superacheElement}
          />
          <h1>/</h1>
          <BtnScrollToSection textContent="Kid Krow" element={kidKrowElement} />
        </header>
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
      </main>
      <Footer social="true" />
    </>
  );
}

export default PageVideos;
