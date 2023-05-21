const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const eventDB = [];

app.post("/events", (req, res) => {
  const events = req.body;
  eventDB.push(events);

  //posts
  axios.post("http://posts-clusterip-srv:4000/events", events).catch((err) => {
    console.log("1", err.message);
  });

  console.log("This is 2.0");
  // query
  axios.post("http://query-clusterip-srv:4002/events", events).catch((err) => {
    console.log("2", err.message);
  });

  //comments
  axios
    .post("http://comments-ipcluster-srv:4001/events", events)
    .catch((err) => {
      console.log("3", err.message);
    });

  //moderate
  axios
    .post("http://moderation-clusterip-srv:4003/events", events)
    .catch((err) => {
      console.log("4", err.message);
    });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(eventDB);
});

app.listen(4005, () => {
  console.log("listening on 4005");
});
