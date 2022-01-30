const express = require("express");
const cors = require("cors");
const axios = require("axios");
const Crawler = require("crawler");
const jsdom = require("jsdom");
const app = express();
const port = 4000;

app.use(cors());

app.param("characterId", (req, res, next, id) => {
  req.characterId = id;
  next();
});

app.get("/api/characters/:characterId/pic", (req, res) => {
  axios
    .get(`https://the-one-api.dev/v2/character/${req.characterId}`, {
      headers: {
        Authorization: "Bearer VE3TQswW4reG5Luwm85f",
      },
    })
    .then((client_res) => {
      const url = client_res.data.docs[0].wikiUrl;

      const crawler = new Crawler();
      crawler.direct({
        uri: url,
        callback: (error, crawler_res) => {
          // console.log(crawler_res.body);

          const dom = new jsdom.JSDOM(crawler_res.body);
          const jquery = require("jquery")(dom.window);

          let pic = jquery(
            "#mw-content-text .mw-parser-output aside figure>a>img"
          );

          const picUrl = pic.attr("src");

          console.log(picUrl);

          res.send(picUrl);
        },
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
