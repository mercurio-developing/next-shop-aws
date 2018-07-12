"use strict";

const mongoose = require("mongoose");
const config = require("./config/config");
const Coin = require("./models/coin");
const data = require("./mock/data.js");

mongoose.Promise = require("bluebird");
mongoose.connect(
  config.mongoURI,
  function(err) {
    if (err) {
      console.log("Failed connecting to MongoDB!");
    } else {
      console.log("Successfully connected to MongoDB!");
    }
  }
);
var db = mongoose.connection;
const Schema = mongoose.Schema,
  ObjectID = require("mongodb").ObjectID;
db.on("error", function(err) {
  console.log("error");
}).catch(function(err) {
  console.error(err);
});
db.once("open", function() {
  console.log("running");
  async function dropDatabase() {
    console.log("Removing Coin collection");
    await Coin.remove();
    console.log("Success!");
  }
  async function seedCoins() {
    console.log("Seeding data..");
    try {
      await Coin.insertMany(data.coins);
      console.log("Success!");
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async function doBoth() {
    await seedCoins();
    // await dropDatabase();
  }
  doBoth();
}).catch(function(err) {
  console.error(err);
});

module.exports = db;
