const express = require("express");
const { getSightings } = require("./utils.js");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.get("/sightings/:sightingsIndex", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings[req.params.sightingsIndex - 1]);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
