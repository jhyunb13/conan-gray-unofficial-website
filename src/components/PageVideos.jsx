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
