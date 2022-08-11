const express = require("express");
const app = express();
const verifdate = (req, res, next) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = new Date().getHours();

  if (
    days[new Date().getDay()] !== "Saturday" &&
    days[new Date().getDay()] !== "Sunday" &&
    hour >= 9 &&
    hour < 17
  ) {
    next();
  } else {
    res.send("oops! date not avilable");
  }
};

app.use(verifdate);

app.use(express.static("Public"));

app.listen(5000, () => console.log("server on"));
