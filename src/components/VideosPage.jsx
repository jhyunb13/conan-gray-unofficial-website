import { useEffect, useState } from "react";

function VideosPage() {
  const [foundHeavenPlaylist, setFoundHeavenPlaylist] = useState([]);
  const [superachePlaylist, setSuperachePlaylist] = useState([]);

  // useEffect(() => {
  //   async function test() {
  //     const a = await fetch(`/video-data`);
  //     const data = await a.json();

  //     console.log(data.items);
  //   }

  //   test();
  // });

  useEffect(() => {
    async function getVideos() {
      const API_SECRET = import.meta.env.VITE_YOUTUBE_API_KEY;
      const youtubeEndPoint =
        "https://www.googleapis.com/youtube/v3/playlistItems";
      const parameters = "part=snippet&maxResults=5";
      const foundHeaven = "PL3exoAUOZJZns5FNKYhFVM5gT_vQYOtP8";
      const superache = "PL3exoAUOZJZnmrJYh9wgTHxSilgEldP_B";

      const foundHeavenRes = await fetch(
        `${youtubeEndPoint}?${parameters}&playlistId=${foundHeaven}&key=${API_SECRET}`
      );
      const foundHeavenData = await foundHeavenRes.json();

      const superacheRes = await fetch(
        `${youtubeEndPoint}?${parameters}&playlistId=${superache}&key=${API_SECRET}`
      );
      const superacheData = await superacheRes.json();

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
    let player1;
    let player2;

    if (foundHeavenPlaylist.length && superachePlaylist.length) {
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
        height: "390",
        width: "640",
        videoId: id,
        playerVars: {
          playsinline: 1,
        },
      });
    }

    function APIReady(id, i) {
      player2 = new YT.Player(`video-player-s-${i + 1}`, {
        height: "390",
        width: "640",
        videoId: id,
        playerVars: {
          playsinline: 1,
        },
      });
    }

    if (YT && foundHeavenPlaylist.length && superachePlaylist.length) {
      foundHeavenVideoId.map((el, i) => onYouTubeIframeAPIReady(el, i));
      superacheVideoId.map((el, i) => APIReady(el, i));
    }
  }, [foundHeavenPlaylist, superachePlaylist]);

  return (
    <div className="pt-35 pb-50">
      <div className="video-list">
        <h1>coming up soon</h1>
        {foundHeavenPlaylist.length
          ? foundHeavenPlaylist
              .filter((el) => !el.snippet.title.includes("Lyric"))
              .map((el, i) => {
                return (
                  <div key={el.snippet.title}>
                    <div id={`video-player-fh-${i + 1}`}></div>
                    <div>
                      {el.snippet.title
                        .split(" ")
                        .slice(3)
                        .slice(0, -3)
                        .join(" ")}
                    </div>
                    <div>{new Date(el.snippet.publishedAt).getFullYear()}</div>
                  </div>
                );
              })
          : null}
        {superachePlaylist.length
          ? superachePlaylist
              .filter(
                (el) =>
                  !el.snippet.title.includes("Lyric") &&
                  !el.snippet.title.includes("Behind")
              )
              .map((el, i) => {
                return (
                  <div key={el.snippet.title}>
                    <div id={`video-player-s-${i + 1}`}></div>
                    <div>
                      {el.snippet.title.includes("Official Video")
                        ? el.snippet.title
                            .split(" ")
                            .slice(3)
                            .slice(0, -2)
                            .join(" ")
                        : el.snippet.title
                            .split(" ")
                            .slice(3)
                            .slice(0, -3)
                            .join(" ")}
                    </div>
                    <div>{new Date(el.snippet.publishedAt).getFullYear()}</div>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
}

export default VideosPage;
