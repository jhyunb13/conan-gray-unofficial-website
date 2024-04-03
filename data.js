import axios from "axios";
import * as cheerio from "cheerio";
import express from "express";
import fs from "fs";

const PORT = 8000;
const app = express();
const url = "https://www.conangray.com/";
const tourData = [];
const filePath = "src/assets/tourData.json";

axios(url)
  .then((res) => {
    const html = res.data;
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

    fs.writeFileSync(filePath, JSON.stringify(tourData[1]));
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
