// How can I use express
const express = require("express");
// this starts our express application
const app = express();

const path = require("path");
// This step is done after coffees get request
const coffeePage = require("./coffeePage");
const homePage = require("./homePage");
// how to inject static middleware
const staticMiddleware = express.static(path.join(__dirname + "/public"));

// MIDDLEWARE
app.use((req, res, next) => {
  console.log("I am a random middleware, I will run with anything");
  console.log(req.method, req.url);
  next();
});
app.use(staticMiddleware);

app.use("/coffees", (req, res, next) => {
  console.log("Hello from coffees");
  next();
});

// Let's create a GET request
// first argument is a path, the next argument is a callback function
// which we can all req, res
app.get("/", (req, res) => {
  // console.log("I am request");
  // res.send accepts html remember before we did res.json() that accepts json data
  // update this to homepage after requiring it
  res.send(homePage());
});

// This gets all the coffees
app.get("/coffees", (req, res) => {
  // This is done first then require coffee and update this
  //   res.send("<h1>Coffees Page</h1>");
  res.send(coffeePage());
});
// How to use params
// Idea: to get one specific item/instance of something
app.get("/coffees/:coffeeId", (req, res) => {
  // console.logs are in the console
  // console.log("These are the params:", req.params);
  res.send("<h1>I am the coffee</h1>");
});

// This function takes in two arguments the portnumber
app.listen(1337, () => console.log("Hey, I am listening on port 1337"));
