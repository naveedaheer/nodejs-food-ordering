const express = require("express");
const router = express.Router();
const orderBookService = require("./services");

const foodItems = [
  {
    name: "sandwich",
    price: 10,
    availableQty: 95,
    description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type."
  }
]

router.get("/fetch-order-books", (req, res) => {
  orderBookService
    .getOrderBooks(req.query)
    .then(async (data) => {
      await res.status(200).send(data);
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/get-currency-pairs", (req, res) => {
  orderBookService
    .currencyPairs()
    .then(async (data) => {
      await res.status(200).send(data);
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/menu-items", (req, res) => {
  try {
    return res.status(200).send(foodItems)
  } catch (error) {
    return res.status(400).send(err)
  }
});

module.exports = router;
