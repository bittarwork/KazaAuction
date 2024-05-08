const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const createError = require("http-errors");
require("./config/mongodb.config").sync;

// enable env variable
require("dotenv").config();

// cors
const cors = require("cors");
const CorsOrigin = {
  origin: "http://127.0.0.1:5500",
};
app.use(cors());

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  let reqMethode = req.method;
  let body = req.body || null;
  let reqUrl = req.url;
  console.log(`a request has arrived to the server with this information:
    \t request method: ${reqMethode}\t request URL: ${reqUrl} , ${JSON.stringify(body)}
    `);
  next();
});

// routes
const routes = require("./routes/routes");
// simple route for backend test
app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome to express-mongodb app" });
});

app.use("/KazaAuctionApi", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// server
const port = process.env.PORT || 5000;
app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server running on ", port, " in ", app.settings.env, " mode.");
});
