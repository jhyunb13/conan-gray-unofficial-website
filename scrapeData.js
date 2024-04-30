import axios from "axios";
import express from "express";
import fs from "fs";
import * as cheerio from "cheerio";

const PORT = 8000;
const app = express();
const officialWebsiteUrl = "https://www.conangray.com/";
const musicUrl = "https://shop.conangray.com/collections/music";
const merchUrl1 = "https://shop.conangray.com/collections/merch";
const merchUrl2 = "https://shop.conangray.com/collections/merch?page=2";
const tourDataPath = "src/assets/tourData.json";
const musicDataPath = "src/assets/musicData.json";
const merchDataPath = "src/assets/merchData.json";
const socialMediaPath = "src/assets/socialMediaData.json";
const tourData = [];
const musicData = [];
const merchData = [];
const socialMediaData = [];

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

    scrapeFunction(html);
    storeData(filePath, dataArr);
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

function scrapeMusicData(html) {
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
}

function scrapeMerchData(html) {
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

    merchData.push(item);
  });
}

// scrapeNStoreData(officialWebsiteUrl, scrapeTourData, tourDataPath, tourData);
scrapeNStoreData(
  officialWebsiteUrl,
  scrapeSocialMediaData,
  socialMediaPath,
  socialMediaData
);
// scrapeNStoreData(
//   musicUrl,
//   scrapeMusicData,
//   musicPath,
//   musicData
// );
// scrapeNStoreData(merchUrl2, scrapeMerchData, merchDataPath, merchData);
// scrapeNStoreData(merchUrl1, scrapeMerchData, merchDataPath, merchData);

// async function scrapeTourData() {
//   try {
//     const html = await getHtml(officialWebsiteUrl);

//     tourDataCheerio(html);
//     storeData(tourDataPath, tourData[1]);
//   } catch (err) {
//     console.error(err);
//   }
// }

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
