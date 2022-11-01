// How can I use express
const express = require("express");
// this starts our express application
const app = express();

// This step is done after coffees get request
const coffeePage = require("./coffeePage");
const homePage = require("./homePage");
// Let's create a GET request
// first argument is a path, the next argument is a callback function
// which we can all req, res
app.get("/", (req, res) => {
  console.log("I am request");
  // res.send accepts html remember before we did res.json() that accepts json data
  // update this to homepage after requiring it
  res.send(homePage());
});

app.get("/coffees", (req, res) => {
  // This is done first then require coffee and update this
  //   res.send("<h1>Coffees Page</h1>");
  res.send(coffeePage());
});

// This function takes in two arguments the portnumber
app.listen(1337, () => console.log("Hey, I am listening on port 1337"));
