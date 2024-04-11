import axios from "axios";
import * as cheerio from "cheerio";
import express from "express";
import fs from "fs";

const PORT = 8000;
const app = express();
const officialUrl = "https://www.conangray.com/";
const musicUrl = "https://shop.conangray.com/collections/music";
const merchUrl = "https://shop.conangray.com/collections/merch";
const merchUrl2 = "https://shop.conangray.com/collections/merch?page=2";
const tourData = [];
const musicData = [];
const merchData = [];
const songData = [];
const socialMediaData = [];
const tourDataPath = "src/assets/tourData.json";
const musicDataPath = "src/assets/musicData.json";
const merchDataPath = "src/assets/merchData.json";
const songsDataPath = "src/assets/songsData.json";
const socialMediaPath = "src/assets/socialMediaData.json";

async function scrapeTourData() {
  try {
    const res = await axios.get(officialUrl);
    const html = res.data;
    const $ = cheerio.load(html);
    const obj = $("script[type='application/ld+json']");

    console.log($(".seated-event-link").attr("href"));
    // for (var i in obj) {
    //   for (var j in obj[i].children) {
    //     var data = obj[i].children[j].data;
    //     if (data) {
    //       const script = JSON.parse(data);
    //       tourData.push(script);
    //     }
    //   }
    // }

    // fs.writeFileSync(tourDataPath, JSON.stringify(tourData[1]));

    // $("#social-links > li").each((index, el) => {
    //   const socialMedia = { platform: "", url: "" };

    //   socialMedia.platform = $(el).find("a").text();
    //   socialMedia.url = $(el).find("a").attr("href");

    //   socialMediaData.push(socialMedia);
    // });

    // fs.writeFileSync(socialMediaPath, JSON.stringify(socialMediaData));
  } catch (err) {
    console.log(err);
  }
}

// scrapeTourData();

async function scrapeSongsData() {
  try {
    const res = await axios.get(officialUrl);
    const html = res.data;
    const $ = cheerio.load(html);

    $(".article").each((index, el) => {
      const song = { songTitle: "", url: "", cover: "" };

      song.songTitle = $(el)
        .find(".article-header")
        .find(".title")
        .find("h3")
        .text();
      song.cover = $(el).find(".album").find("img").attr("src");
      song.url = $(el)
        .find(".article-header")
        .find(".cta")
        .find("a")
        .attr("href");

      songData.push(song);

      fs.writeFileSync(songsDataPath, JSON.stringify(songData));
    });
  } catch (err) {
    console.log(err);
  }
}

// scrapeSongsData();

async function scrapemusicData() {
  try {
    const res = await axios.get(musicUrl);
    const html = res.data;
    const $ = cheerio.load(html);

    $(".product-container").each((index, el) => {
      const item = {
        title: "",
        price: "",
        availability: "",
        status: "",
        img: "",
        url: "",
      };

      item.title = $(el).find(".product-title").children("a").text();
      item.img = $(el).find("img").attr("srcset");
      item.price = $(el).find(".product-price").text();
      item.status = $(el).find(".product-status").children(".signed").text();
      item.availability = $(el).find(".product-availability").text();
      item.url = $(el).find("a").attr("href");

      musicData.push(item);
    });

    fs.writeFileSync(musicDataPath, JSON.stringify(musicData));
  } catch (err) {
    console.log(err);
  }
}

// scrapemusicData();

async function scrapeMerchData() {
  try {
    const res = await axios.get(merchUrl);
    const html = res.data;
    const $ = cheerio.load(html);

    const res2 = await axios.get(merchUrl2);
    const html2 = res2.data;
    const $$ = cheerio.load(html2);

    $(".product-container").each((index, el) => {
      const item = {
        title: "",
        price: "",
        availability: "",
        status: "",
        img: "",
        url: "",
      };

      item.title = $(el).find(".product-title").children("a").text();
      item.img = $(el).find("img").attr("srcset");
      item.price = $(el).find(".product-price").text();
      item.status = $(el).find(".product-status").children(".signed").text();
      item.availability = $(el).find(".product-availability").text();
      item.url = $(el).find("a").attr("href");

      merchData.push(item);
    });

    $$(".product-container").each((index, el) => {
      const item = {
        title: "",
        price: "",
        availability: "",
        status: "",
        img: "",
        url: "",
      };

      item.title = $(el).find(".product-title").children("a").text();
      item.img = $(el).find("img").attr("srcset");
      item.price = $(el).find(".product-price").text();
      item.status = $(el).find(".product-status").children(".signed").text();
      item.availability = $(el).find(".product-availability").text();
      item.url = $(el).find("a").attr("href");

      merchData.push(item);
    });

    fs.writeFileSync(merchDataPath, JSON.stringify(merchData));
  } catch (err) {
    console.log(err);
  }
}

scrapeMerchData();

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
