import { useEffect, useState } from "react";
import SongInfo from "./SongInfo";
import Footer from "./Footer";

function PageVideos() {
  const [allVideosPlaylist, setAllVideosPlaylist] = useState([]);
  const [foundHeavenPlaylist, setFoundHeavenPlaylist] = useState([]);
  const [superachePlaylist, setSuperachePlaylist] = useState([]);

  function handleScrollTo(id) {
    document
      .querySelector(`#${id}`)
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
    let player;

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

    function onYouTubeIframeAPIReady(playerId, videoId, i) {
      player = new YT.Player(`${playerId}-${i + 1}`, {
        width: "100%",
        videoId: videoId,
        playerVars: {
          playsinline: 1,
        },
      });
    }

    if (YT && foundHeavenPlaylist.length && superachePlaylist.length) {
      allVideosId.map((id, i) =>
        onYouTubeIframeAPIReady("video-player-kk", id, i)
      );
      foundHeavenVideoId.map((id, i) =>
        onYouTubeIframeAPIReady("video-player-fh", id, i)
      );
      superacheVideoId.map((id, i) =>
        onYouTubeIframeAPIReady("video-player-s", id, i)
      );
    }
  }, [foundHeavenPlaylist, superachePlaylist, allVideosPlaylist]);

  return (
    <>
      <main id="video-page">
        <header id="video-menu">
          <button onClick={() => handleScrollTo(`found-heaven-era`)}>
            <h1>Found Heaven</h1>
          </button>
          <h1>/</h1>
          <button onClick={() => handleScrollTo(`superache-era`)}>
            <h1>Superache</h1>
          </button>
          <h1>/</h1>
          <button onClick={() => handleScrollTo(`kid-krow-era`)}>
            <h1>Kid Krow</h1>
          </button>
        </header>
        <div id="found-heaven-era" className="video-list">
          {foundHeavenPlaylist.length
            ? foundHeavenPlaylist
                .filter((el) => !el.snippet.title.includes("Lyric"))
                .map((el, i) => {
                  return (
                    <div className="video" key={el.snippet.title}>
                      <div className="player-container">
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
        <div id="superache-era" className="video-list">
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
                      <div className="player-container">
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
        <div id="kid-krow-era" className="video-list">
          {allVideosPlaylist.slice(4, 10).map((el, i) => {
            return (
              <div className="video" key={el.snippet.title}>
                <div className="player-container">
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
      </main>
      <Footer social="true" />
    </>
  );
}

export default PageVideos;
