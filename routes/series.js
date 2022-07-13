const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
router.use(express.json());

const getSeries = () => {
  return JSON.parse(fs.readFileSync("./data/seriesData.json"));
};

router.route("/").get((req, res) => {
  //get videos data from videos.json
  let series = getSeries();
  //copy the array of video objects and assign it to a new variable, then return it as response.
  const SeriesInfo = series.map((serie) => {
    return {
      title: serie.title,
      img: serie.img,
      date: serie.dates,
      id: serie.id,
      description: serie.description,
      characters: serie.characters,
    };
  });
  return res.status(200).send(SeriesInfo);
});

module.exports = router;
