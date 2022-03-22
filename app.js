const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const blogs = require("./data");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(
    "welcome to localhost food recipe's guys, everything is full working with the local server"
  );
});

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/blogs/selected", (req, res) => {
  res.send(blogs[0]);
});

app.listen(port, function () {
  console.log(`server is up and running on port ${port}`);
});

app.post("/blogs", (req, res) => {
  const newBlog = req.body;
  blogs.blogs.push(newBlog);
  res.send({
    message: `${newBlog.title} successfully added to our collection`,
  });
  console.log(blogs);
});
