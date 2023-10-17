const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const date = new Date();

  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();

  const dateTime = addDays(new Date(year, month, day), 100);
  const finalResult = `${dateTime.getDate()}/${
    dateTime.getMonth() + 1
  }/${dateTime.getFullYear()}`;

  response.send(finalResult);
});

app.listen(3000);
module.exports = app;
