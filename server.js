const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

// const logger = require('morgan');
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const config = require("./config/config");
const app = next({ dev, dir: "./client" });
const handle = app.getRequestHandler();
// Put in place textbook middlewares for express.

// //routes declare
// const authRouter = require("./routes/users");
//PORT
const port = process.env.PORT || 3000;

require("./db");
// models
const Coin = require("./models/coin");

const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: config.mongoURI,
  collection: "sessions"
});

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use("/", express.static(path.join(__dirname, "public")));

  server.use(
    session({
      secret: config.secretOrKey,
      resave: false,
      saveUninitialized: false,
      store: store,
      unset: "destroy",
      name: "Shopping Cart"
    })
  );
  //Routes
  server.get("/inventory", (req, res) => {
    Coin.find({}).then(coins => {
      return app.render(req, res, "/inventory", { query: coins });
    });
  });

  server.get("/inventory/:id", (req, res) => {
    let id = req.params.id;
    Coin.findById(id).then(coin => {
      return app.render(req, res, "/coinDetail", { query: coin });
    });
  });

  server.post("/addToCart", (req, res) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    let coin = new Object({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      images: req.body.images,
      category: req.body.category
    });
    req.session.cart.push(coin);
    res.send("coin added to the shopping cart").status(201);
  });

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
