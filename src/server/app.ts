import * as express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // TODO: Fix file path to bundle.js from index.html
  res.sendFile("index.html", { root: `${__dirname}/../client` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
