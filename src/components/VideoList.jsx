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

  const videoIdList =
    playlist.length &&
    selectVideos(elementId).map((video) => video.snippet.resourceId.videoId);

  useEffect(() => {
    const { YT } = window;

    function onYouTubeIframeAPIReady(playerId, videoId, index) {
      return new YT.Player(`${playerId}-${index + 1}`, {
        width: "100%",
        videoId: videoId,
        playerVars: {
          playsinline: 1,
        },
      });
    }

    if (playlist.length)
      videoIdList.map((id, i) =>
        onYouTubeIframeAPIReady(`video-player-${albumTitle}`, id, i)
      );
  }, [videoIdList, playlist, albumTitle]);

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
