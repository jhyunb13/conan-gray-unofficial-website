import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import VideoList from "../components/VideoList";
import BtnScrollToSection from "../components/BtnScrollToSection";

function PageVideos() {
  const [allVideosPlaylist, setAllVideosPlaylist] = useState([]);
  const [foundHeavenPlaylist, setFoundHeavenPlaylist] = useState([]);
  const [superachePlaylist, setSuperachePlaylist] = useState([]);

  const foundHeavenElement = useRef(null);
  const superacheElement = useRef(null);
  const kidKrowElement = useRef(null);

  function getYoutubeData(url) {
    return fetch(url)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    async function getVideos() {
      try {
        const API_SECRET = import.meta.env.VITE_YOUTUBE_API_KEY;
        const youtubeEndPoint =
          "https://www.googleapis.com/youtube/v3/playlistItems";
        const allVideosId = "PL3exoAUOZJZkAxjqVQc6GcQK7C9bgvCcg";
        const foundHeavenId = "PL3exoAUOZJZns5FNKYhFVM5gT_vQYOtP8";
        const superacheId = "PL3exoAUOZJZnmrJYh9wgTHxSilgEldP_B";
        const allvideosUrl = `${youtubeEndPoint}?part=snippet&maxResults=10&playlistId=${allVideosId}&key=${API_SECRET}`;
        const foundHeavenUrl = `${youtubeEndPoint}?part=snippet&maxResults=5&playlistId=${foundHeavenId}&key=${API_SECRET}`;
        const superacheUrl = `${youtubeEndPoint}?part=snippet&maxResults=5&playlistId=${superacheId}&key=${API_SECRET}`;

        const videoLists = await Promise.all([
          getYoutubeData(allvideosUrl),
          getYoutubeData(foundHeavenUrl),
          getYoutubeData(superacheUrl),
        ]);

        setAllVideosPlaylist(videoLists[0].items);
        setFoundHeavenPlaylist(videoLists[1].items);
        setSuperachePlaylist(videoLists[2].items);
      } catch (error) {
        console.error(error.message);
      }
    }
    getVideos();
  }, []);

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
