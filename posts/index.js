const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  try {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;

    posts[id] = {
      id,
      title,
    };

    await axios.post("http://event-bus-srv:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });

    res.status(201).send(posts[id]);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log("Received events", data);
  res.send({ status: "Event listened, OK" });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
