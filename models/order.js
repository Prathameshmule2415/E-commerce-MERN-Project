const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
  product: { type: ObjectId, ref: "Product" },
  name: String,
  count: Number,
  price: Number
});

const orderSChema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    ammount: { type: Number },
    address: { type: String, maxlength: 2000 },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSChema);
const Productcart = mongoose.model("ProductCart", ProductCartSchema);

module.exports = { Order, Productcart };
