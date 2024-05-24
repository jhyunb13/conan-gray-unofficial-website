import { useCallback, useEffect } from "react";
import propTypes from "prop-types";
import Video from "./Video";

function VideoList({ elementId, playlist, albumTitle, element }) {
  const selectVideos = useCallback(
    (elementId) => {
      if (elementId === "kid-krow") return playlist.slice(4, 10);

      return playlist.filter(
        (video) =>
          !video.snippet.title.includes("Lyric") &&
          !video.snippet.title.includes("Behind")
      );
    },
    [playlist]
  );

  useEffect(() => {
    const { YT } = window;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let videoIdList;
    let player;

    if (playlist.length)
      videoIdList = selectVideos(elementId).map(
        (video) => video.snippet.resourceId.videoId
      );

    function onYouTubeIframeAPIReady(playerId, videoId, index) {
      player = new YT.Player(`${playerId}-${index + 1}`, {
        width: "100%",
        videoId: videoId,
        playerVars: {
          playsinline: 1,
        },
      });
    }

    if (YT && playlist.length)
      videoIdList.map((id, i) =>
        onYouTubeIframeAPIReady(`video-player-${albumTitle}`, id, i)
      );
  }, [playlist, selectVideos, elementId, albumTitle]);

  return (
    <div id={`${elementId}-era`} className="video-list" ref={element}>
      {playlist.length
        ? selectVideos(elementId).map((video, i) => (
            <Video
              albumTitle={albumTitle}
              video={video}
              index={i}
              key={video.snippet.title}
            />
          ))
        : ""}
    </div>
  );
}

VideoList.propTypes = {
  elementId: propTypes.string,
  playlist: propTypes.array,
  albumTitle: propTypes.string,
  element: propTypes.object,
};

export default VideoList;
