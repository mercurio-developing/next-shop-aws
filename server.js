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
  server.get("/api/all-coins", (req, res) => {
    Coin.find({}).then(coins => {
      res.send(coins).status(201);
    });
  });
  server.get("/api/coinsInCart", (req, res) => {
    res.send(req.session.cart).status(201);
  });
  server.get("/inventory/:id", (req, res) => {
    let id = req.params.id;
    Coin.findById(id).then(coin => {
      return app.render(req, res, "/coinDetail", { query: coin });
    });
  });

  server.post("/delete-coin", (req, res) => {
    let id = req.body.id;
    console.log(id);
    req.session.cart.map((coin, index) => {
      if (coin._id === id) {
        req.session.cart.splice(index, 1);
        res.status(201);
        res.send("Coin be deleted");
      }
    });
  });

  server.post("/addToCart", (req, res) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    let newCoin = new Object({
      _id: req.body._id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      images: req.body.images,
      categories: req.body.categories,
      dateCreated: req.body.dateCreated
    });
    if (req.session.cart.length === 0) {
      req.session.cart.push(newCoin);
      res.status(201);
      res.send("Coin added to your cart");
    } else {
      req.session.cart.map((coin, index) => {
        console.log(index + 1, req.session.cart.length);
        if (coin._id === newCoin._id) {
          console.log("This coin is already in the cart");
          res.status(401);
          res.send({ err: "This coin is already in your cart" });
        } else if (index + 1 === req.session.cart.length) {
          req.session.cart.push(newCoin);
          res.status(201);
          res.send("Coin added to your cart");
        }
      });
    }
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
