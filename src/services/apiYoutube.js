function getYoutubeData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export async function getVideos() {
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

    return videoLists;
  } catch (error) {
    console.error(error.message);
  }
}
