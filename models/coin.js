const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CoinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  images: [{ type: String }],
  categories: [{ type: String }],
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateSelled: Date
});
const Coin = mongoose.model("coins", CoinSchema);
module.exports = Coin;
