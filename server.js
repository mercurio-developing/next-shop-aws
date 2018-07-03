const express = require("express");
// const logger = require('morgan');
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const next = require("next");
const app = next({ dir: "./client" });
const handle = app.getRequestHandler();
// Put in place textbook middlewares for express.
if (process.env.NODE_ENV !== "production") {
  // app.use(logger('dev'));
}

// //routes declare
// const authRouter = require("./routes/users");

//PORT
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use("/", express.static(path.join(__dirname, "public")));

  // Body parser middleware
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  // DB Config
  const db = require("./config/config").mongoURI;

  // Connect to MongoDB
  mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

  //Routes
  // authRouter(app, server);
  //dont touch!
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
