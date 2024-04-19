import { useEffect, useState } from "react";
import SongInfo from "./SongInfo";
import Footer from "./Footer";

function PageVideos() {
  const [allVideosPlaylist, setAllVideosPlaylist] = useState([]);
  const [foundHeavenPlaylist, setFoundHeavenPlaylist] = useState([]);
  const [superachePlaylist, setSuperachePlaylist] = useState([]);

  function handleToFh() {
    document
      .querySelector(".found-heaven-era")
      .scrollIntoView({ block: "start", behavior: "auto" });
  }

  function handleToSuperache() {
    document
      .querySelector(".superache-era")
      .scrollIntoView({ block: "start", behavior: "auto" });
  }

  function handleToKidKrow() {
    document
      .querySelector(".kid-krow-era")
      .scrollIntoView({ block: "start", behavior: "auto" });
  }

  useEffect(() => {
    async function getVideos() {
      const API_SECRET = import.meta.env.VITE_YOUTUBE_API_KEY;
      const youtubeEndPoint =
        "https://www.googleapis.com/youtube/v3/playlistItems";
      const parameters = "part=snippet&maxResults=5";
      const parametersVer2 = "part=snippet&maxResults=10";
      const foundHeaven = "PL3exoAUOZJZns5FNKYhFVM5gT_vQYOtP8";
      const superache = "PL3exoAUOZJZnmrJYh9wgTHxSilgEldP_B";
      const allVideos = "PL3exoAUOZJZkAxjqVQc6GcQK7C9bgvCcg";

      const allVideosRes = await fetch(
        `${youtubeEndPoint}?${parametersVer2}&playlistId=${allVideos}&key=${API_SECRET}`
      );
      const allVideosData = await allVideosRes.json();

      const foundHeavenRes = await fetch(
        `${youtubeEndPoint}?${parameters}&playlistId=${foundHeaven}&key=${API_SECRET}`
      );
      const foundHeavenData = await foundHeavenRes.json();

      const superacheRes = await fetch(
        `${youtubeEndPoint}?${parameters}&playlistId=${superache}&key=${API_SECRET}`
      );
      const superacheData = await superacheRes.json();

      setAllVideosPlaylist(allVideosData.items);
      setFoundHeavenPlaylist(foundHeavenData.items);
      setSuperachePlaylist(superacheData.items);
    }

    getVideos();
  }, []);

  useEffect(() => {
    const { YT } = window;
    const tag = document.createElement("script");

    let foundHeavenVideoId;
    let superacheVideoId;
    let allVideosId;
    let player1;
    let player2;
    let player3;

    if (
      foundHeavenPlaylist.length &&
      superachePlaylist.length &&
      allVideosPlaylist.length
    ) {
      allVideosId = allVideosPlaylist
        .slice(4, 10)
        .map((el) => el.snippet.resourceId.videoId);

      foundHeavenVideoId = foundHeavenPlaylist
        .filter((el) => !el.snippet.title.includes("Lyric"))
        .map((el) => el.snippet.resourceId.videoId);

      superacheVideoId = superachePlaylist
        .filter(
          (el) =>
            !el.snippet.title.includes("Lyric") &&
            !el.snippet.title.includes("Behind")
        )
        .map((el) => el.snippet.resourceId.videoId);
    }

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function onYouTubeIframeAPIReady(id, i) {
      player1 = new YT.Player(`video-player-fh-${i + 1}`, {
        width: "100%",
        videoId: id,
        playerVars: {
          playsinline: 1,
        },
      });
    }

    function sIframeReady(id, i) {
      player2 = new YT.Player(`video-player-s-${i + 1}`, {
        width: "100%",
        videoId: id,
        playerVars: {
          playsinline: 1,
        },
      });
    }

    function kkIframeReady(id, i) {
      player3 = new YT.Player(`video-player-kk-${i + 1}`, {
        width: "100%",
        videoId: id,
        playerVars: {
          playsinline: 1,
        },
      });
    }

    if (YT && foundHeavenPlaylist.length && superachePlaylist.length) {
      allVideosId.map((el, i) => kkIframeReady(el, i));
      foundHeavenVideoId.map((el, i) => onYouTubeIframeAPIReady(el, i));
      superacheVideoId.map((el, i) => sIframeReady(el, i));
    }
  }, [foundHeavenPlaylist, superachePlaylist, allVideosPlaylist]);

  return (
    <>
      <div className="pt-35 pb-50">
        <div className="eras-list mt-30">
          <button onClick={handleToFh}>
            <h1>Found Heaven</h1>
          </button>
          <h1>/</h1>
          <button onClick={handleToSuperache}>
            <h1>Superache</h1>
          </button>
          <h1>/</h1>
          <button onClick={handleToKidKrow}>
            <h1>Kid Krow</h1>
          </button>
        </div>
        <div className="found-heaven-era mt-20">
          {foundHeavenPlaylist.length
            ? foundHeavenPlaylist
                .filter((el) => !el.snippet.title.includes("Lyric"))
                .map((el, i) => {
                  return (
                    <div className="video" key={el.snippet.title}>
                      <div className="video-container">
                        <div
                          className="video-player"
                          id={`video-player-fh-${i + 1}`}
                        ></div>
                      </div>
                      <div className="video-info">
                        <SongInfo
                          title={el.snippet.title
                            .split(" ")
                            .slice(3)
                            .slice(0, -3)
                            .join(" ")}
                          releaseDate={new Date(
                            el.snippet.publishedAt
                          ).getFullYear()}
                        />
                      </div>
                    </div>
                  );
                })
            : null}
        </div>
        <div className="superache-era ">
          {superachePlaylist.length
            ? superachePlaylist
                .filter(
                  (el) =>
                    !el.snippet.title.includes("Lyric") &&
                    !el.snippet.title.includes("Behind")
                )
                .map((el, i) => {
                  return (
                    <div className="video" key={el.snippet.title}>
                      <div className="video-container">
                        <div
                          className="video-player"
                          id={`video-player-s-${i + 1}`}
                        ></div>
                      </div>
                      <div>
                        <div className="video-info">
                          <SongInfo
                            title={
                              el.snippet.title.includes("Official Video")
                                ? el.snippet.title
                                    .split(" ")
                                    .slice(3)
                                    .slice(0, -2)
                                    .join(" ")
                                : el.snippet.title
                                    .split(" ")
                                    .slice(3)
                                    .slice(0, -3)
                                    .join(" ")
                            }
                            releaseDate={new Date(
                              el.snippet.publishedAt
                            ).getFullYear()}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
            : null}
        </div>
        <div className="kid-krow-era">
          {allVideosPlaylist.slice(4, 10).map((el, i) => {
            return (
              <div className="video" key={el.snippet.title}>
                <div className="video-container">
                  <div
                    className="video-player"
                    id={`video-player-kk-${i + 1}`}
                  ></div>
                </div>
                <div>
                  <div className="video-info">
                    <SongInfo
                      title={
                        el.snippet.title.includes("Official Video")
                          ? el.snippet.title
                              .split(" ")
                              .slice(3)
                              .slice(0, -2)
                              .join(" ")
                          : el.snippet.title.split(" ").slice(-1).join()
                      }
                      releaseDate={2020}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer social="true" />
    </>
  );
}

export default PageVideos;
