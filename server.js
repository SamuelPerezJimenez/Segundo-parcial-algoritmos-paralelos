// @ts-check

const { Client } = require("pg");
const express = require("express");
const app = express();
const port = 8085;

const client = new Client({
 password: "1170167",
  user: "1170167",
  database: "root",
  host: "db",
});

app.use(express.static("public"));

app.get("/colors", async (req, res) => {
  const results = await client
    .query("SELECT * FROM color")
    .then((payload) => {
      return payload.rows;
    })
    .catch(() => {
      throw new Error("Query failed");
    });
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(results));
});

(async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(` app listening at ${port}`);
  });
})();

