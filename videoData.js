import axios from "axios";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = 9000;
const youtubeEndPoint = "https://www.googleapis.com/youtube/v3/playlistItems";

dotenv.config();
app.use(cors());
app.use(express());
app.set("port", 9000);

app.get("/video-data", async (req, res) => {
  try {
    const parameters = "part=snippet&maxResults=5";
    const foundHeaven = "PL3exoAUOZJZns5FNKYhFVM5gT_vQYOtP8";
    const superache = "PL3exoAUOZJZnmrJYh9wgTHxSilgEldP_B";

    // const foundHeavenRes = await axios.get(
    //   `${youtubeEndPoint}?${parameters}&playlistId=${foundHeaven}&key=${API_SECRET}`
    // );
    // const foundHeavenData = foundHeavenRes.data;

    const foundHeavenRes = await fetch(
      `${youtubeEndPoint}?${parameters}&playlistId=${foundHeaven}&key=${API_SECRET}`
    );
    const foundHeavenData = await foundHeavenRes.json();

    res.json(foundHeavenData);
  } catch (err) {
    console.log(err);
  }

  //   const superacheRes = await fetch(
  //     `${youtubeEndPoint}?${parameters}&playlistId=${superache}&key=${API_SECRET}`
  //   );
  //   const superacheData = await superacheRes.json();
});

app.get("/", (req, res) => {
  res.json("hi");
});

app.listen(app.get("port"), app.get("host"), () =>
  console.log(`backend is running on port ${PORT}`)
);
