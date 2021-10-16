import express from "express";
import morgan from "morgan";
import { urlencoded, json } from "body-parser";

const { log } = console;

const app = express();

app.use(morgan("dev"));

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));

// parse application/json
app.use(json());

app.get("/", (req, res) => {
  res.json("hello Amazon");
});

app.post("/", (req, res) => {
  log("body", req.body.name);
});

app.listen(3000, (err) => {
  if (err) {
    log("Error", err);
  } else {
    log("Fine", 3000);
  }
});
