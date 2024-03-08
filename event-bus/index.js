const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://posts-clusterip-srv:8000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://comments-srv:8001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://query-srv:8002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://moderation-srv:8003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(8005, () => {
  console.log("Listening on 8005");
});
