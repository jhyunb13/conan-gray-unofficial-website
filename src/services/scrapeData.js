import axios from "axios";
import express from "express";
import fs from "fs";
import * as cheerio from "cheerio";

const PORT = 8000;
const app = express();

const officialWebsiteUrl = "https://www.conangray.com/";
const foundHeavenMusic = "https://shop.conangray.com/collections/music";
const foundHeavenMerch1 = "https://shop.conangray.com/collections/merch";
const foundHeavenMerch2 = "https://shop.conangray.com/collections/merch?page=2";
const superacheMerch = "https://shop.conangray.com/collections/superache-tour";

const tourData = [];
const socialMediaData = [];
const foundHeavenMusicData = [];
const foundHeavenMerchData = [];
const superacheData = [];

const tourDataPath = "src/data/tourData.json";
const socialMediaPath = "src/data/socialMediaData.json";
const foundHeavenMusicPath = "src/data/found-heaven-merch/musicData.json";
const foundHeavenMerchPath = "src/data/found-heaven-merch/merchData.json";
const superachePath = "src/data/superache-merch/merchData.json";

async function getHtml(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function scrapeNStoreData(url, scrapeFunction, filePath, dataArr) {
  try {
    const html = await getHtml(url);

    scrapeFunction(html, dataArr);
    dataArr.length === 2
      ? storeData(filePath, dataArr[1])
      : storeData(filePath, dataArr);
  } catch (err) {
    console.error(err);
  }
}

function storeData(filePath, dataArr) {
  fs.writeFileSync(filePath, JSON.stringify(dataArr));
}

function scrapeTourData(html) {
  const $ = cheerio.load(html);
  const obj = $("script[type='application/ld+json']");

  for (var i in obj) {
    for (var j in obj[i].children) {
      var data = obj[i].children[j].data;
      if (data) {
        const script = JSON.parse(data);
        tourData.push(script);
      }
    }
  }
}

function scrapeSocialMediaData(html) {
  const $ = cheerio.load(html);

  $("#social-links > li").each((index, el) => {
    const socialMedia = { platform: "", url: "" };

    socialMedia.platform = $(el).find("a").text();
    socialMedia.url = $(el).find("a").attr("href");

    socialMediaData.push(socialMedia);
  });
}

function scrapeFhMerchData(html, arr) {
  const $ = cheerio.load(html);

  $(".product-container").each((index, el) => {
    const item = {
      title: "",
      price: "",
      soldOut: "",
      status: "",
      img: "",
      url: "",
    };

    item.title = $(el).find(".product-title").children("a").text();
    item.img = $(el).find("img").attr("srcset");
    item.price = $(el).find(".product-price").text();
    item.status = $(el).find(".product-status").children(".signed").text();
    item.soldOut = $(el).find(".product-availability").text();
    item.url = $(el).find("a").attr("href");

    arr.push(item);
  });
}

function scrapeSuperacheMerchData(html, arr) {
  const $ = cheerio.load(html);

  $(".card__container").each((index, el) => {
    const item = {
      title: "",
      originalPrice: "",
      currentPrice: "",
      soldOut: "",
      status: "",
      img: "",
      url: "",
    };

    item.title = $(el).find(".card__title").children(".text_body_sm").text();
    item.img = $(el).find(".card__image").children("img").attr("src");
    item.originalPrice = $(el).find(".price__compare").text();
    item.currentPrice = $(el).find(".price__current").text();
    item.status = $(el).find(".product-status").children(".signed").text();
    item.soldOut = $(el).find(".product-availability").text();
    item.url = $(el).find(".card__image--container").children("a").attr("href");

    arr.push(item);
  });
}

// scrapeNStoreData(officialWebsiteUrl, scrapeTourData, tourDataPath, tourData);
// scrapeNStoreData(
//   officialWebsiteUrl,
//   scrapeSocialMediaData,
//   socialMediaPath,
//   socialMediaData
// );
// scrapeNStoreData(
//   foundHeavenMusic,
//   scrapeFhMerchData,
//   foundHeavenMusicPath,
//   foundHeavenMusicData
// );
// scrapeNStoreData(
//   foundHeavenMerch2,
//   scrapeFhMerchData,
//   foundHeavenMerchPath,
//   foundHeavenMerchData
// );
// scrapeNStoreData(
//   foundHeavenMerch1,
//   scrapeFhMerchData,
//   foundHeavenMerchPath,
//   foundHeavenMerchData
// );

scrapeNStoreData(
  superacheMerch,
  scrapeSuperacheMerchData,
  superachePath,
  superacheData
);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
